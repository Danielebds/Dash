import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import multer from "multer";
import { config } from "dotenv";
import bcrypt from "bcrypt";

config();
//Variavel utilizada para a criação da pasta uploads onde armazena o cod das imagens fornecida no registro.
const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;

// Conexão com o banco de dados.
const db = mysql2.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

//Endpoint para conexão com o Dashboard.
app.post("/login", (req, res) => {
  const { email, senha } = req.body;
  
  if (!email || !senha) {
      return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  const query = "SELECT * FROM info_projeto WHERE email = ?";
  db.query(query, [email], (err, results) => {
      if (err) {
          return res.status(500).json({ message: "Erro no servidor", error: err });
      }

      if (results.length === 0) {
          return res.status(401).json({ message: "Email ou senha inválidos." });
      }

      const user = results[0];

      bcrypt.compare(senha, user.senha, (err, isMatch) => {
          if (err) {
              return res.status(500).json({ message: "Erro no servidor", error: err });
          }

          if (!isMatch) {
              return res.status(401).json({ message: "Email ou senha inválidos." });
          }

          // Login bem-sucedido
          return res.json({ message: "Login bem-sucedido", user: { id: user.id, email: user.email, nomeProjeto: user.nomeProjeto } });
      });
  });
});

//Endpoint para o registro de clientes.
app.post("/register", upload.single("imagem"), async (req, res) => {
  const {
      cpfMat,
      empresa,
      programaSetor,
      responsavel,
      setor,
      cargo,
      quantidadePessoas,
      email,
      senha,
      reSenha
  } = req.body;

  const imagem = req.file ? req.file.path : null;

  console.log("Dados recebidos:", req.body);
  console.log("Imagem recebida:", req.file);

  if (!cpfMat || !empresa || !programaSetor || !responsavel || !setor || !cargo || !quantidadePessoas || !email || !senha || !reSenha || !imagem) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  if (senha !== reSenha) {
      return res.status(400).json({ error: "As senhas não coincidem" });
  }

  try {
      const hashedPassword = await bcrypt.hash(senha, 10);
      const values = [
          cpfMat,
          empresa,
          programaSetor,
          responsavel,
          setor,
          cargo,
          quantidadePessoas,
          email,
          hashedPassword,
          imagem
      ];

      console.log("Valores para inserção de dados:", values);

      db.query(
          "INSERT INTO info_projeto (cpfMat, empresa, programaSetor, responsavel, setor, cargo, quantidadePessoas, email, senha, imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          values,
          (err, result) => {
              if (err) {
                  console.error("Erro ao inserir dados no banco de dados:", err);
                  return res.status(500).json({ error: "Erro ao salvar dados" });
              }
              console.log("Dados inseridos com sucesso:", result);
              res.status(201).json({ message: "Projeto Cadastrado" });
          }
      );
  } catch (error) {
      console.error("Erro ao processar solicitação:", error);
      res.status(500).json({ error: "Erro no servidor" });
  }
});

//Endpoint para obter o resultado da quantidade de pessoas em cada setor.
app.get('/quantidadePessoas', (req, res) => {
    const setores = ['Construção Civil', 'Mecânica', 'Comércio', 'Aulas'];
    
    const query = `
      SELECT setor, SUM(quantidadePessoas) AS total
      FROM info_projeto
      WHERE setor IN (?)
      GROUP BY setor
    `;
  
    db.query(query, [setores], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Erro no servidor', error: err });
      }
  
      // Estrutura para garantir que todos os setores sejam retornados, mesmo que não estejam no banco de dados
      const quantidadePessoasPorSetor = setores.reduce((acc, setor) => {
        acc[setor] = 0;
        return acc;
      }, {});
  
      results.forEach(result => {
        quantidadePessoasPorSetor[result.setor] = result.total;
      });
  
      return res.json(quantidadePessoasPorSetor);
    });
  });


app.listen(port, () => {
    console.log(`Conected to ${port}`);
});