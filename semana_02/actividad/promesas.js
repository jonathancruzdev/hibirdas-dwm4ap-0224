const { error } = require('console');
const fs = require('fs/promises');
// Lectura de archivos
const path1 = 'nota1.txt';
const path2 = 'nota2.txt';
const path3 = 'frase.txt';
let frase = '';


/*

fs.writeFile( path3, frase).then( data => console.log('Ok!'))
.catch( error => console.log(error))
*/
const escribir = async () => {
    const data1 = await fs.readFile(path1, 'utf-8');
    const data2 = await fs.readFile(path2, 'utf-8');

    frase = (data1 + data2).toUpperCase();
    console.log(frase);
   
};

escribir();



