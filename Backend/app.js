import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import multer from "multer";
import { config } from "dotenv";
import bcrypt from "bcrypt";
import { fileURLToPath } from 'url';
import path, { dirname } from "path";

config();
// Constante utilizada para a criação da pasta uploads onde armazena o cod das imagens fornecida no registro.
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });

const upload = multer({ storage });
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error("Erro ao conectar ao SQLite:", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite.");
  }
});

// Criar a tabela se ela não existir
db.run(`
  CREATE TABLE IF NOT EXISTS info_projeto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cpfMat TEXT NOT NULL,
    empresa TEXT NOT NULL,
    programaSetor TEXT NOT NULL,
    responsavel TEXT NOT NULL,
    setor TEXT NOT NULL,
    cargo TEXT NOT NULL,
    quantidadePessoas INTEGER NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    imagemUrl TEXT
  )
`);

// Endpoint para conexão com o Dashboard.
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
      return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  const query = "SELECT * FROM info_projeto WHERE email = ?";
  db.get(query, [email], (err, user) => {
      if (err) {
          return res.status(500).json({ message: "Erro no servidor", error: err });
      }

      if (!user) {
          return res.status(401).json({ message: "Email ou senha inválidos." });
      }

      bcrypt.compare(senha, user.senha, (err, isMatch) => {
          if (err) {
              return res.status(500).json({ message: "Erro no servidor", error: err });
          }

          if (!isMatch) {
              return res.status(401).json({ message: "Email ou senha inválidos." });
          }

          // Login bem-sucedido
          return res.json({ 
            message: "Login bem-sucedido",
            user: {
                id: user.id,
                email: user.email,
                empresa: user.empresa,
                programaSetor: user.programaSetor,
                responsavel: user.responsavel,
                quantidadePessoas: user.quantidadePessoas,
                imagemUrl: user.imagemUrl ? `https://dash-wal2.onrender.com/${user.imagemUrl}` : null
            } 
          });
      });
  });
});

// Endpoint para o registro de clientes.
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

  const imagemUrl = req.file ? req.file.path : null;

  if (!cpfMat || !empresa || !programaSetor || !responsavel || !setor || !cargo || !quantidadePessoas || !email || !senha || !reSenha || !imagemUrl) {
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
          imagemUrl
      ];


      const query = `
        INSERT INTO info_projeto (cpfMat, empresa, programaSetor, responsavel, setor, cargo, quantidadePessoas, email, senha, imagemUrl) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      
      db.run(query, values, function (err) {
          if (err) {
              console.error("Erro ao inserir dados no banco de dados:", err);
              return res.status(500).json({ error: "Erro ao salvar dados" });
          }
          console.log("Dados inseridos com sucesso:", this.lastID);
          res.status(201).json({ message: "Projeto Cadastrado" });
      });
  } catch (error) {
      console.error("Erro ao processar solicitação:", error);
      res.status(500).json({ error: "Erro no servidor" });
  }
});

// Endpoint para entregar arquivos estáticos da pasta 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Endpoint para obter o resultado da quantidade de pessoas em cada setor.
app.get('/quantidadePessoas', (req, res) => {
  const setores = ['Construção Civil', 'Mecânica', 'Comércio', 'Aulas'];
  
  const query = `
    SELECT setor, SUM(quantidadePessoas) AS total
    FROM info_projeto
    WHERE setor IN (${setores.map(() => '?').join(',')})
    GROUP BY setor
  `;

  db.all(query, setores, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro no servidor', error: err });
    }

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
    console.log(`Conectado na porta ${port}`);
});
