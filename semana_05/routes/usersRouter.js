const express = require('express');
const router = express.Router();
// importo el controlador
const { addUser, getUsers, getUserById } = require('../controllers/userController');

// Obtener todos los usuarios
router.get('/', getUsers);
// Obtener por ID
router.get('/:id', getUserById );
// Crear usuario
router.post('/', addUser );

// Actualizar usuario
router.put('/:id', (req, res) => {
    console.log('PUT User')
});
// Eliminar usuario
router.delete('/:id', (req, res) => {
    console.log('DELETE User')
});

module.exports = router;