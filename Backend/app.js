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


app.listen(port, () => {
    console.log(`Conected to ${port}`);
});
