import { readFile } from 'node:fs/promises';

Promise.all([
  readFile('primeros-pasos/miArchivo.txt', 'utf-8'),
  readFile('primeros-pasos/miArchivo2.txt', 'utf-8')
]).then(([texto, texto2]) => {
  console.log('Primer archivo:');
  console.log(texto);
  console.log('Segundo archivo:');
  console.log(texto2);
});