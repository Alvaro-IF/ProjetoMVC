import express from "express"
import "dotenv/config"
import { conectarBanco } from "./config/database";

const app = express();

app.get("/", (req, res) => (
    res.send("API da loja funcionando")
))

app.get("/produtos", (req, res) => (
    res.send("Lista de produtos")
))

async function iniciarServidor(){
    await conectarBanco();
    app.listen(process.env.PORT, () => {
        console.log("Rodando no servidor na porta: " + process.env.PORT)
    })
}

iniciarServidor();