// Seria el modelo de Datos
const fs = require('fs/promises');


class UserManager {
    path = 'data.json';
    list = [];

    constructor(){
        this.readJSON();
    }

    async readJSON(){
        try {
            const data = await fs.readFile(this.path, 'utf-8');
            const json = JSON.parse(data);
            this.list = json;            
        } catch (error) {
            console.error('Ocurrio un error ', error)
        }
    }

    async writeJSON (){
        try {
            const data = JSON.stringify( this.list , null, 2);
            await fs.writeFile(this.path, data );
        } catch (error) {
            console.error('Ocurrio un error ', error)
        }
    }
    addUser( user ){
        this.list.push( user );
        this.writeJSON()
    }
    async getUsers(){
        await this.readJSON();
        //console.log('get:',this.list)
        return this.list;
    }
    
    getUserById( id ){
        const user =  this.list.find( item  => item.id == id );
        return user ? user : {};
    }
}

module.exports =  UserManager;