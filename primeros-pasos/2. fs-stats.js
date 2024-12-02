const fs = require('node:fs');

const stats = fs.statSync('primeros-pasos/miArchivo.txt');

console.log(stats.isFile());
console.log(stats.isDirectory());
console.log(stats.isSymbolicLink());
console.log(stats.size);