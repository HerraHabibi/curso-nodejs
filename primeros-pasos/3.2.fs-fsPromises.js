const fs = require('node:fs/promises');

console.log('Primer archivo:');

fs.readFile('primeros-pasos/miArchivo.txt', 'utf-8')
  .then(texto => console.log(texto));

console.log('-- Esto podría ser la ejecución de otras tareas y no está siendo interrumpido por el readFile --');

console.log('Segundo archivo:');

fs.readFile('primeros-pasos/miArchivo2.txt', 'utf-8')
  .then(texto => console.log(texto));