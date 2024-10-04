const Task = require('../models/taskModels');
const User = require('../models/usersModels');


const createTask = async ( req, res ) => {
    const { description, userId } = req.body;

    if( !description || !userId ){
        res.status(400).json({ msg: 'Faltan paramatros obligatorios', data: { description, userId }  })
    }

    try {
        const user = await User.findById( userId)

        const newTask = new Task({ description, user: user._id })
        await newTask.save();
        res.status(200).json({ msg: 'Tarea Creada', data: newTask})
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'UPs tenemos un error :(', data: {}})
    }

}


const getTasks = async (req, res) => {
    const tasks = await Task.find().populate('user')
    res.status(200).json({ msg: 'Ok', data: tasks });
}


const getTasksByUserId = async ( req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if( user ){
            res.status(200).json({ msg: "success", data: user});
        } else {
            res.status(404).json({ msg: "No se encontro el usuario ", data: { }});

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'UPs tenemos un error :(', data: {}})
    }
}

const deleteTaskById = async ( req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        if( task ){
            res.status(200).json({ msg: "success", data: task});
        } else {
            res.status(404).json({ msg: "No se encontro el usuario ", data: { }});

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'UPs tenemos un error :(', data: {}})
    }
}
const updateTaskById = async ( req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        const task = await Task.findByIdAndUpdate(id, { description }, {new: true});
        if( task ){
            res.status(200).json({ msg: "success", data: task});
        } else {
            res.status(404).json({ msg: "No se encontro la tarea ", data: { }});

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'UPs tenemos un error :(', data: {}})
    }
}

module.exports = { createTask, getTasks, getTasksByUserId, deleteTaskById, updateTaskById};