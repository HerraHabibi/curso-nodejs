const { readFile } = require('node:fs/promises');

// IIFE (Immediately Invoked Function Expression)
(
  async () => {
    console.log('Primer archivo:');

    const texto = await readFile('primeros-pasos/miArchivo.txt', 'utf-8');
    console.log(texto);

    console.log('-- Esto podría ser la ejecución de otras tareas y no está siendo interrumpido por el readFile --');

    console.log('Segundo archivo:');

    const texto2 = await readFile('primeros-pasos/miArchivo.txt', 'utf-8');
    console.log(texto2);
  }
)();