// ############################# //

// En NodeJS no hay window ni document
// En cambio sí que hay globalThis, que apunta a la variable global

// ############################# //

// Para importar otros archivos .js se utilizan módulos y hay 2 formas:
// - CommonJS (por defecto en NodeJS o con .cjs)
// - ES Modules (con .jsm), recomendable y más moderno

// ############################# //

// La mejor forma de importar un módulo nativo de NodeJS es con require(node:nombreModulo)
//    - os
//    - fs

// ############################# //

// Los readFile deben ser asíncronos para poder hacer otras tareas simultáneamente	

// ############################# //

// Promisify sirve para convertir de callbacks a promesas y así poder usar modulos que no tienen promesas nativas de forma asíncrona

// ############################# //

// En CommonJS, el Await solo se puede usar dentro de funciones async (como una IIFE), no como en ES Modules