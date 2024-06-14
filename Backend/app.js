import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import multer from "multer";
import { config } from "dotenv";
import bcrypt from "bcrypt";

config();

const upload = multer({ dest: 'uploads/' });
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;

const db = mysql2.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

app.get("/clientes", (req, res) => {
    db.query("SELECT cpf FROM info_projeto;", (err, results) => {
        if (err) {
            console.error("Erro na consulta ao Banco de dados:", err);
        };
        return res
        .status (200)
        .json(results);
    });
});

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

app.post("/register", upload.single('imagem'), (req, res) => {
  const {
      rg,
      cpf,
      estado,
      cidade,
      departamento,
      areaDatuacao,
      cargo,
      estadoProjeto,
      cidadeProjeto,
      nomeProjeto,
      email,
      senha,
      nivelEscolaridade,
      empregabilidade,
      imagem
  } = req.body;

  bcrypt.hash(senha, saltRounds, (err, hash) => {
      if (err) {
          return res.status(500).json({ message: "Erro ao gerar o hash da senha", error: err });
      }

      const projects = "INSERT INTO info_projeto (`rg`,`cpf`,`estado`,`cidade`,`departamento`,`areaDatuacao`,`cargo`,`estadoProjeto`,`cidadeProjeto`,`nomeProjeto`,`email`,`senha`,`nivelEscolaridade`,`empregabilidade`, `imagem`) VALUES (?)";
      const values = [
          rg,
          cpf,
          estado,
          cidade,
          departamento,
          areaDatuacao,
          cargo,
          estadoProjeto,
          cidadeProjeto,
          nomeProjeto,
          email,
          hash,
          nivelEscolaridade,
          empregabilidade,
          req.file ? req.file.path : null
      ];

      db.query(projects, [values], (err, data) => {
          if (err) {
              return res.status(500).json({ message: "Erro no servidor", error: err });
          }
          return res.json("Projeto Cadastrado");
      });
  });
});


app.listen(port, () => {
    console.log(`Conected to ${port}`);
});