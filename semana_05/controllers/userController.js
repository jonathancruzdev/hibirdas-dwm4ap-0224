// Importa el modelo, realiza la validaciones y ejecuta los métodos del modelo
const { Users } = require('../models/Users');

const getUsers = async (req, res) => {
    const users = new Users();
    const data = await users.getUsers();
    console.table(data);
    res.status(200).send(data);
}

module.exports = { getUsers }
