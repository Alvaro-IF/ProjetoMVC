import express from "express"
import "dotenv/config"
import { conectarBanco } from "./config/database";
import produtoRoutes from "./routes/produtoRoutes"

const app = express();
app.use("/produtos", produtoRoutes)

async function iniciarServidor(){
    await conectarBanco();
    app.listen(process.env.PORT, () => {
        console.log("Rodando no servidor na porta: " + process.env.PORT)
    })
}

iniciarServidor();