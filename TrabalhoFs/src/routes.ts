import express from 'express'
import { locadoraController } from './controllers/locadoraController'
import { clientControler } from './controllers/clientController'
import { carroController } from './controllers/carroControler'
import multer from 'multer'
import multerConfig from './middlewares/multer'


const upload = multer(multerConfig)
 export const router = express.Router()

//Locadora
router.post("/newLocadora" , locadoraController.add)
router.put("/locadora/:id", locadoraController.edit)
router.delete('/delLocadora/:id' , locadoraController.delete)
router.get("/locadora/search", locadoraController.index)
router.post("/loginLoc", locadoraController.login )


//Usuário
router.get('/User' , clientControler.index)
router.delete('/delUser/:id' , clientControler.delete)
router.post("/newUser" , clientControler.add)
router.put("/User/id:" , locadoraController.edit)
router.post("/logincli", clientControler.login)


//Cars

router.get('/cars' , carroController.index)
router.post('/newCar/:id', carroController.add)
router.get("/mycars/:locid" , carroController.getcarsloc)
