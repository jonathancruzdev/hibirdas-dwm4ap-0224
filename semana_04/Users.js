const fs = require('fs/promises');
const crypto = require('crypto');
class Users {
    path = '';
    
    constructor(path='data/users.json'){
        this.path = path;
    }

    // {id: 'dsdsds32d', name: 'Juan',  email: 'juan@mail.com' }
    async addUser( user ){
        const { name, email } = user;
        const id = crypto.randomUUID();
        // Leo el JSON local
        const data = await fs.readFile(this.path, 'utf-8');
        const array = JSON.parse(data);
        //const id = array.length + 1;
        array.push({
            id: id,
            name: name,
            email: email
        })
        const dataStr= JSON.stringify( array, null, 2);
        // Guardo el JSON
        await fs.writeFile( this.path, dataStr, null, 2 );

    }
    async getUsers(){
        const data = await fs.readFile(this.path, 'utf-8');
        const array = JSON.parse(data);
        return array;
    }
    async getUserById( id ){
        const data = await fs.readFile(this.path, 'utf-8');
        const array = JSON.parse(data);
        return array.find( user => user.id == id);
    }
    async deleteUserById( id ){

    }
}


module.exports = { Users }