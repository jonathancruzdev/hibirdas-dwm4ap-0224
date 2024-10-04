const express = require('express');
const router = express.Router();
/* ------------------------- Importo el Controlador ------------------------- */
const { createTask, getTasks, getTasksByUserId, updateTaskById, deleteTaskById } = require('../controllers/taskController');

router.get('/', getTasks );
router.post('/', createTask );
router.get('/:id', getTasksByUserId);
router.delete('/:id', deleteTaskById);
router.put('/:id', updateTaskById);

module.exports = router;
