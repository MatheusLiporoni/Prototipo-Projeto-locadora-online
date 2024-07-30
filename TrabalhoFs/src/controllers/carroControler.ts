import multer from "multer"
import { Cars } from "../models/index"
import { Request , Response } from "express"
import multerConfig from "../middlewares/multer"
import path from "path"
import fs from 'fs'




export const carroController = {

    index: async (req: Request , res: Response) =>{
        try {
            const cars = await Cars.findAll()

            return res.json(cars)
            
        } catch(err){
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
            
    },

    add:  async (req:Request , res: Response) => {
        try{
            
            
           const {locid ,preco , modelo , marca , grupo ,} = req.body
           const situation = false
           
         
           const car = await Cars.create({locid,preco , modelo , marca , grupo, situation})
           
            res.json(car)
        }
        catch(err){
            if(err instanceof Error){
                return console.log('Erro aqui')
            }
        }
    },

    getcarsloc: async (req: Request , res:Response) => {
        try {
            const { locid } = req.params;
            if (!locid) {
                console.log(`id não chegou`)
                return res.status(400).json({ message: 'Parameter locid is required' });
            }

            const cars = await Cars.findAll({
                where: {
                    locid
                },
                attributes: [
                    "preco",
                    'modelo',
                    "marca",
                    "grupo",
                    "situation"
                ]
            })

            res.json(cars)
            
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }       
            
        }
    }

    


}