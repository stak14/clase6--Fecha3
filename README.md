Proyecto de Manipulación de Arrays de Libros en JavaScript
Este proyecto demuestra diversas técnicas para manipular arrays de objetos en JavaScript, utilizando un array de libros como ejemplo. Cada libro es un objeto con propiedades title y author.

Archivos
Libros.js: Contiene el código JavaScript con las funciones y ejemplos.
TodoEnUno.js: Parece ser una copia idéntica de Libros.js.
Funcionalidad del Código
El código se divide en cuatro partes principales, cada una construyendo sobre la anterior o demostrando un concepto específico.

Array Inicial de Libros
Ambos archivos comienzan definiendo un array de objetos llamado books. Cada objeto representa un libro y tiene las propiedades title y author.

JavaScript

const books = [
  { title: 'El Aleph', author: 'Jorge Luis Borges' },
  { title: 'La ciudad y los perros', author: 'Mario Vargas Llosa' },
  { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
  { title: 'Rayuela', author: 'Julio Cortázar' },
  { title: 'Ficciones', author: 'Jorge Luis Borges' },
  { title: 'El hacedor', author: 'Jorge Luis Borges' },
  { title: 'Los pasos perdidos', author: 'Alejo Carpentier' },
  { title: 'El reino de este mundo', author: 'Alejo Carpentier' },
  { title: 'La fiesta del chivo', author: 'Mario Vargas Llosa' },
  { title: 'La tía Julia y el escribidor', author: 'Mario Vargas Llosa' },
  { title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez' },
  { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
  { title: 'Bestiario', author: 'Julio Cortázar' },
  { title: 'Las armas secretas', author: 'Julio Cortázar' },
];
*** PRIMERA PARTE ***
Función: filterBooksByAuthor(books, authorName)

Propósito: Filtrar el array books y devolver un nuevo array conteniendo solo los libros cuyo autor coincida exactamente con authorName.
Método Utilizado: Array.prototype.filter(). Este método crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
Ejemplo: Se filtran los libros de 'Jorge Luis Borges'.
JavaScript

function filterBooksByAuthor(books, authorName) {
  return books.filter(book => {
    return book.author === authorName;
  });
}

const authorToFilterPart1 = 'Jorge Luis Borges';
const borgesBooksPart1 = filterBooksByAuthor(books, authorToFilterPart1);
console.log(`Libros de ${authorToFilterPart1}:`, borgesBooksPart1);
*** SEGUNDA PARTE ***
Función: modifyAuthorName(booksArray, newAuthorName)

Propósito: Modificar el nombre del autor de todos los libros dentro del booksArray proporcionado.
Método Utilizado: Array.prototype.forEach(). Este método ejecuta una función proporcionada una vez para cada elemento del array.
Importante: Esta función modifica directamente los objetos dentro del array que se le pasa. Si el booksArray es el resultado de un filtro sobre el array original books (como borgesBooksPart2), los objetos modificados serán los mismos objetos que están en el array books original. Por lo tanto, el array books original también se verá afectado.
Ejemplo: Se filtran los libros de 'Jorge Luis Borges', luego se modifica el nombre del autor a 'J.L. Borges (Modificado)'. Se observa que el array books original es modificado.
JavaScript

function modifyAuthorName(booksArray, newAuthorName) {
  booksArray.forEach(book => {
    book.author = newAuthorName;
  });
  return booksArray;
}

const authorToFilterPart2 = 'Jorge Luis Borges';
const newAuthorPart2 = 'J.L. Borges (Modificado)';

const borgesBooksPart2 = filterBooksByAuthor(books, authorToFilterPart2); // borgesBooksPart2 contiene referencias a objetos en 'books'
const modifiedBorgesBooksPart2 = modifyAuthorName(borgesBooksPart2, newAuthorPart2); // Modifica los objetos referenciados
console.log("Array original 'books' (después de la segunda parte):", books); // 'books' se ve afectado
*** TERCERA PARTE ***
Función: filterBooksByAuthorImproved(books, authorQuery)

Propósito: Filtrar el array books y devolver un nuevo array con los libros cuyo nombre de autor (convertido a minúsculas) incluya la cadena authorQuery (también convertida a minúsculas). Esto permite búsquedas parciales e insensibles a mayúsculas/minúsculas.
Métodos Utilizados: Array.prototype.filter(), String.prototype.toLowerCase(), String.prototype.includes().
Ejemplo: Se crea una copia superficial booksPart3 de books usando el operador de propagación (...) para evitar modificar el array original en estos ejemplos. Luego se filtra por 'Jorge Luis Borges', 'Borges' y 'Cortázar'.
JavaScript

function filterBooksByAuthorImproved(books, authorQuery) {
  const queryLower = authorQuery.toLowerCase();
  return books.filter(book => {
    const authorLower = book.author.toLowerCase();
    return authorLower.includes(queryLower);
  });
}

const booksPart3 = [...books]; // Copia superficial para no modificar 'books' directamente en esta sección

const borgesFullPart3 = filterBooksByAuthorImproved(booksPart3, 'Jorge Luis Borges');
const borgesApellidoPart3 = filterBooksByAuthorImproved(booksPart3, 'Borges');
const cortazarApellidoPart3 = filterBooksByAuthorImproved(booksPart3, 'Cortázar');
*** CUARTA PARTE ***
Propósito: Demostrar cómo evitar la mutación del array original al filtrar y modificar libros. Se introducen versiones "seguras" de las funciones.

Función: filterBooksByAuthorSafe(books, authorName)

Propósito: Similar a filterBooksByAuthor, pero los libros en el array devuelto son copias superficiales de los libros originales.
Métodos Utilizados: Array.prototype.filter(), Array.prototype.map(), y el operador de propagación (...) para crear la copia superficial de cada objeto libro ({ ...book }).
Función: modifyAuthorNameSafe(booksArray, newAuthorName)

Propósito: Toma un array de libros y devuelve un nuevo array donde cada libro es una copia del original pero con el nombre del autor modificado. El array de entrada no se modifica.
Método Utilizado: Array.prototype.map() y el operador de propagación ({ ...book, author: newAuthorName }) para crear una copia de cada libro con el autor actualizado.
Ejemplo: Se crea una copia booksPart4. Se filtran los libros de 'Mario Vargas Llosa' usando filterBooksByAuthorSafe (obteniendo copias). Luego, se modifican estas copias usando modifyAuthorNameSafe. El array booksPart4 (y por extensión el books original si no se hubiera copiado al inicio de la cuarta parte) permanece intacto.
JavaScript

function filterBooksByAuthorSafe(books, authorName) {
  return books.filter(book => book.author === authorName)
               .map(book => ({ ...book })); // Crea una copia superficial del objeto
}

function modifyAuthorNameSafe(booksArray, newAuthorName) {
  return booksArray.map(book => ({ ...book, author: newAuthorName }));
}

const booksPart4 = [...books]; // Copia para esta sección

const authorToFilterPart4 = 'Mario Vargas Llosa';
const newAuthorPart4 = 'M. Vargas Llosa (Corregido)';

// vargasLlosaBooksPart4Original contiene COPIAS de los libros filtrados
const vargasLlosaBooksPart4Original = filterBooksByAuthorSafe(booksPart4, authorToFilterPart4);
// modifiedVargasLlosaBooksPart4 es un NUEVO array con las modificaciones
const modifiedVargasLlosaBooksPart4 = modifyAuthorNameSafe(vargasLlosaBooksPart4Original, newAuthorPart4);

console.log("Array original 'books' (después de la cuarta parte):", booksPart4); // No debería estar modificado
Conceptos Clave Demostrados
Filtrado de Arrays: Uso de filter para seleccionar elementos basados en una condición.
Iteración de Arrays: Uso de forEach para ejecutar una acción en cada elemento.
Transformación de Arrays: Uso de map para crear un nuevo array transformando cada elemento del original.
Mutabilidad vs. Inmutabilidad:
La segunda parte demuestra cómo la modificación de objetos dentro de un array filtrado puede afectar al array original si los objetos son referencias (comportamiento mutable).
La cuarta parte muestra cómo trabajar con copias de objetos para lograr un comportamiento inmutable, evitando efectos secundarios no deseados en los datos originales.
Copias Superficiales: Uso del operador de propagación (...) para crear nuevas instancias de objetos, copiando sus propiedades de primer nivel.
Búsqueda Insensible a Mayúsculas/Minúsculas: Uso de toLowerCase() y includes() para búsquedas de texto flexibles.
Este proyecto es un excelente ejemplo para entender cómo funcionan las referencias de objetos en JavaScript y la importancia de la inmutabilidad cuando se desea evitar la modificación accidental de datos.
