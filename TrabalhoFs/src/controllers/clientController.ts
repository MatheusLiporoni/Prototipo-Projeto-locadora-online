import e, { Request, Response } from "express"
import  Cliente  from "../models/Cliente"
import { jwtService } from "../services/jwtService"

export const clientControler = {
    index: async (req: Request ,  res: Response) => {
        try{
            const id = req.params.id
            const cliente = await Cliente.findByPk(id)

            if(cliente){
                return res.json(cliente)
        }
        }
        catch(err){
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },

    delete: async (req: Request ,  res: Response) => {
        try{
            const id = req.params.id
            const cliente = await Cliente.findByPk(id)

            if(cliente){
                return res.send("excluido")
            }
        }
        catch(err){
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },

    add: async (req: Request , res: Response) =>{
        try {
            const {name, idade , dataNascimento, email ,password , phone , cpf} = req.body
            const cliente = Cliente.create({
                name, idade , dataNascimento, email ,password , phone , cpf
            })          
         
         return res.json(cliente)
         
 
        } catch (err) {
         if(err instanceof Error){
             return res.status(400).json({message: err.message})
         }
         
         
        }
         
    },

    edit: async (req: Request ,  res: Response) => {
        try {
            const id = req.params.id
            const {name, idade , dataNascimento, email ,password , phone , cpf} = req.body
            const cliente = await Cliente.findByPk(id)         
            if(cliente){
                cliente.update({
                    name, idade , dataNascimento, email ,password , phone , cpf       
                })

                return res.json(cliente)
            }

            return res.send('Cliente não encontrado')
            
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }   
        }



    },

    login: async (req: Request , res:Response) => {
        try {
            const {email , password} = req.body
            const cliente = await Cliente.findOne({
                where: {
                    email,
                }
            
            })

            if(!cliente){
                return res.status(401).json({message:"Email não registrado"})
                
            }

            const issame = await cliente.checkPassword(password) 

            if (issame == false) {
                return res.status(401).json({message: "Senha incorreta"})        
                
            }
            const payload = {
                id: cliente.id,
                name: cliente.name
            }
            const token = jwtService.signToken(payload, '7d')
            return res.json({ ...payload, token }).status(201)      
            
            
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }       
            
        }

    },



}