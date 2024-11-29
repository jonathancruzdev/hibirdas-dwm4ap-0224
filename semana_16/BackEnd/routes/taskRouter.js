const express = require('express');
// importamos el middleware
const auth = require('../middleware/auth');

const router = express.Router();
/* ------------------------- Importo el Controlador ------------------------- */
const { createTask, getTasks, getTasksByUserId, updateTaskById, deleteTaskById } = require('../controllers/taskController');

router.get('/', auth, getTasks );
router.post('/', auth, createTask );
router.get('/:id', getTasksByUserId);
router.delete('/:id', auth, deleteTaskById);
router.put('/:id', auth, updateTaskById);

module.exports = router;
