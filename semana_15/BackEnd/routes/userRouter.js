const express = require('express');
const router = express.Router();
/* ------------------------- Importo el Controlador ------------------------- */
const {creatUser, getUsers, getUsersById, deleteUserById, updateUserById, login } = require('../controllers/userController');

// Retorna todos los usuarios
router.get('/', getUsers );
// Crea un usuario
router.post('/', creatUser );
// Login
router.post('/login', login);
// Obtener usuario por ID
router.get('/:id', getUsersById);
// Eliminamos un user por id
router.delete('/:id', deleteUserById);
// Actualizamos el usuarios
router.put('/:id', updateUserById);

module.exports = router;
