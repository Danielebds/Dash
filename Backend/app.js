import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import multer from "multer";
import { config } from "dotenv";

config();

const upload = multer({ dest: 'uploads/' });

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

app.post("/form", upload.single('imagem'), (req, res) => {
    const projects =
      "INSERT INTO info_projeto (`rg`,`cpf`,`estado`,`cidade`,`departamento`,`areaDatuacao`,`cargo`,`estadoProjeto`,`cidadeProjeto`,`nomeProjeto`,`email`,`senha`,`nivelEscolaridade`,`empregabilidade`, `imagem`) VALUES (?)";
    const values = [
      req.body.rg,
      req.body.cpf,
      req.body.estado,
      req.body.cidade,
      req.body.departamento,
      req.body.areaDatuacao,
      req.body.cargo,
      req.body.estadoProjeto,
      req.body.cidadeProjeto,
      req.body.nomeProjeto,
      req.body.email,
      req.body.senha,
      req.body.nivelEscolaridade,
      req.body.empregabilidade,
      req.file.path || null
    ];
  
    db.query(projects, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("Projeto Cadastrado");
    });
  });


app.listen(port, () => {
    console.log(`Conected to ${port}`);
});