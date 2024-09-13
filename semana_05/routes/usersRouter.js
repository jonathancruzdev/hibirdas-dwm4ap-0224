const express = require('express');
const router = express.Router();
// importo el controlador
const { getUsers } = require('../controllers/userController');

// Obtener todos los usuarios
router.get('/', getUsers);
// Obtener por ID
router.get('/:id', (req, res) => {
    console.log('GET Users by ID')
});
// Crear usuario
router.post('/', (req, res) => {
    console.log('POST User')
});
// Actualizar usuario
router.put('/:id', (req, res) => {
    console.log('PUT User')
});
// Eliminar usuario
router.delete('/:id', (req, res) => {
    console.log('DELETE User')
});

module.exports = router;