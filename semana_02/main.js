const UserManager = require('./UserManager')

const manager = new UserManager();

// Para usar los métodos de la clase lo tratamos como promesas, tambien los podemos hacer con async await

manager.getUsers().then( users => console.table(users) );


manager.addUser( {}).then( data => console.log(data))
