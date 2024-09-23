const express = require('express');
const router = express.Router();
/* ------------------------- Importo el Controlador ------------------------- */
const {creatUser, getUsers} = require('../controllers/userController');

// Retorna todos los usuarios
router.get('/', getUsers );
// Crea un usuario
router.post('/', creatUser );


module.exports = router;
