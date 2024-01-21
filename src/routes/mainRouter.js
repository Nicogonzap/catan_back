import express from 'express'
const router = express.Router();
import mainController from '../controllers/mainController.js'
//const mainController = require('../controllers/main_controller')

router.get('/',(req, res) =>{res.send('Ping al main')})
router.get('/players',mainController.listPlayers)

export default router