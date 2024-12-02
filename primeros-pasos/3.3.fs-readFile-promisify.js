const fs = require('node:fs');
const { promisify } = require('node:util');

const readFilePromisify = promisify(fs.readFile);

console.log('Primer archivo:');

readFilePromisify('primeros-pasos/miArchivo.txt', 'utf-8')
  .then(texto => console.log(texto));

console.log('-- Esto podría ser la ejecución de otras tareas y no está siendo interrumpido por el readFile --');

console.log('Segundo archivo:');

readFilePromisify('primeros-pasos/miArchivo2.txt', 'utf-8')
  .then(texto => console.log(texto));