const UserManager = require('./UserManager')
const fs = require('fs');
const path = 'data.json';



fs.readFile(path, 'utf-8', (err, data) => {
    if(err){
        console.error('Ocurrio un error', err);
        return;
    }
    const json = JSON.parse(data);
    console.log(json);

})