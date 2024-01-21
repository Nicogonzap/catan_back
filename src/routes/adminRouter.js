import express from 'express'
const router = express.Router();
import adminController from '../controllers/adminController.js'
//const adminController = require('../controllers/main_controller')

router.get('/',(req, res) =>{res.send('Ping a admin router')})

export default router