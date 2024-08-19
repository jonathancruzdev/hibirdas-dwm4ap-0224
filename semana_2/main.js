const UserManager = require('./UserManager')
const fs = require('fs/promises');
const path = 'data.json';

const manager = new UserManager([]);

async function leer(){
    const data = await fs.readFile(path);
    const json = JSON.parse(data);
    console.log( json);

}


leer();

/* fs.readFile(path, 'utf-8', (err, data) => {
    if(err){
        console.error('Ocurrio un error', err);
        return;
    }
    const json = JSON.parse(data);
    console.log(json);

}) */