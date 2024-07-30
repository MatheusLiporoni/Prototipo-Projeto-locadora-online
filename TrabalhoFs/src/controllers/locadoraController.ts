import { Request , Response } from "express"
import {Cars, Locadora}  from "../models/index"
import { Op } from "sequelize"
import { jwtService } from "../services/jwtService"

export const locadoraController = {
    add: async (req: Request , res: Response) =>{
       try {
        const {name , phone , email , password , cnpj_cpf, cidade , estado , endereco} = req.body
        const locadora = await Locadora.create({
            name,
            phone,
            email,
            password,
            cnpj_cpf,
            cidade,
            estado,
            endereco  
        })
        
        return res.json(locadora)
        

       } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({message: err.message})
        }
        
        
       }


        
    },

    edit: async (req: Request ,  res: Response) => {
        try {
            const id = req.params.id
            const {name , phone , email , password , cnpj_cpf, cidade , estado , endereco} = req.body
            const locadora = await Locadora.findByPk(id)

            if(locadora){
                locadora.update({
                    name,
                    phone,
                    email,
                    password , cnpj_cpf, cidade , estado , endereco
                })

                return res.json(locadora)
            }

            return res.send('Locadora não encontrada')
            
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }   
        }



    },

    delete: async (req: Request , res:Response) => {
        try {
            const id = req.params.id
            await Locadora.destroy({where: {
                id:id
            }})

            return res.send("Locadora excluida")
            
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }      
        }
    },

    index: async (req: Request , res: Response) => {
        try {
            const {name}  = req.query
            const locadora =  await Locadora.findAll({
                attributes: [
                    'name',
                    'phone',
                    'cidade',
                    'estado',
                    'endereco'
                ],
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            })

           return res.json(locadora)

            
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }          
        }
    },

    login: async (req: Request , res:Response) => {
        try {
            const {email , password} = req.body
            const loc = await Locadora.findOne({
                where: {
                    email,
                }
            
            })

            if(!loc){
                return res.status(401).json({message:"Email não registrado"})
                
            }

            const issame = await loc.checkPassword(password) 

            if (issame == false) {
                return res.status(401).json({message: "Senha incorreta"})        
                
            }
            const payload = {
                id: loc.id,
                name: loc.name
            }
            const token = jwtService.signToken(payload, '7d')
            return res.json({ ...payload, token }).status(200)      
            
            
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }       
            
        }

    },

    




      


    
}