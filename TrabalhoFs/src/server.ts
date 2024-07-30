import express from "express";
import { sequelize } from "./database";
import { router } from "./routes";
import cors from "cors"



const app = express()
app.use(cors())
app.use(express.json())
app.use(router)






app.listen(3000 , () => {
    sequelize.authenticate().then(() => {
        console.log("DB conection successfull")
    })
    console.log("Aplicação rodando")
})

