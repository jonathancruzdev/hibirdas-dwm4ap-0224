const fs = require('fs');
// Lectura de archivos
const path1 = 'nota1.txt';
const path2 = 'nota2.txt';
const path3 = 'frase.txt';
let frase = '';



fs.readFile(path1, 'utf-8', (err, data) => {
    if(err){
        console.error('Ocurrio un error', err);
        return;
    }
    frase = data.toString();
    fs.readFile(path2, 'utf-8', (err, data2) => {
        if(err){
            console.error('Ocurrio un error', err);
            return;
        }
        frase += data2.toString();
        frase = frase.toUpperCase();

        fs.writeFile( path3, frase, (err) => {
            if( err){
                console.error('Ocurrio un error', err);
            } else {
                console.log('todo Ok!');
            }
        })
    })
})



/*
fs.writeFile(path3, frase, fn );

const fn = (err) => {
    if( err){
        console.error('Ocurrio un error', err);
    } else {
        console.log('todo Ok!');
    }
}
    */