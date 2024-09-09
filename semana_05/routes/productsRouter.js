const express = require('express');
const router = express.Router();

// Obtener todos los productos
router.get('/', (req, res) => {
    console.log('GET Products')
});
// Obtener por ID
router.get('/:id', (req, res) => {
    console.log('GET Products by ID')
});
// Crear producto
router.post('/', (req, res) => {
    console.log('POST Product')
});
// Actualizar producto
router.put('/:id', (req, res) => {
    console.log('PUT Product')
});
// Eliminar producto
router.delete('/:id', (req, res) => {
    console.log('DELETE Product')
});

module.exports = router;