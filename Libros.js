// Este es el array de objetos 'books'. Cada objeto representa un libro
// y tiene dos propiedades: 'title' (el título del libro) y 'author' (el nombre del autor).
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

// *** PRIMERA PARTE ***
console.log("\n*** PRIMERA PARTE ***\n");

// Esta función 'filterBooksByAuthor' toma dos argumentos:
// 1. 'books': El array de libros que queremos filtrar.
// 2. 'authorName': El nombre del autor que estamos buscando.
function filterBooksByAuthor(books, authorName) {
  // El método 'filter' crea un nuevo array que contiene solo los elementos
  // del array original que pasan una cierta condición (definida por la función callback).
  return books.filter(book => {
    // Para cada 'book' en el array, esta función anónima (callback) se ejecuta.
    // 'book' representa el objeto del libro actual que se está evaluando.
    // 'book.author' accede a la propiedad 'author' del objeto 'book'.
    // '=== authorName' compara si el valor de 'book.author' es estrictamente
    // igual al valor de 'authorName' que se pasó a la función principal.
    // Si esta comparación es 'true', el 'book' actual se incluye en el nuevo array
    // que 'filter' devolverá. Si es 'false', se omite.
    return book.author === authorName;
  });
}

// Ejemplo de uso de la función 'filterBooksByAuthor':
const authorToFilterPart1 = 'Jorge Luis Borges';
const borgesBooksPart1 = filterBooksByAuthor(books, authorToFilterPart1);
console.log(`Libros de ${authorToFilterPart1}:`, borgesBooksPart1);

// *** SEGUNDA PARTE ***
console.log("\n*** SEGUNDA PARTE ***\n");

// Esta función 'modifyAuthorName' toma dos argumentos:
// 1. 'booksArray': El array de libros cuyo nombre de autor queremos modificar.
// 2. 'newAuthorName': El nuevo nombre que queremos asignar a los autores.
function modifyAuthorName(booksArray, newAuthorName) {
  // El método 'forEach' ejecuta una función proporcionada una vez para cada
  // elemento del array. A diferencia de 'map' o 'filter', 'forEach' no crea
  // un nuevo array; simplemente itera sobre los elementos existentes.
  booksArray.forEach(book => {
    // Para cada 'book' en el array, accedemos a la propiedad 'author'
    // y le asignamos el valor de 'newAuthorName'. ¡Importante! Esto modifica
    // directamente el objeto 'book' dentro del array original (o el array
    // que se le pase a la función).
    book.author = newAuthorName;
  });
  // Devolvemos el array modificado. Aunque 'forEach' no devuelve nada,
  // es una buena práctica devolver el array después de la modificación
  // para permitir el encadenamiento de funciones si fuera necesario.
  return booksArray;
}

const authorToFilterPart2 = 'Jorge Luis Borges';
const newAuthorPart2 = 'J.L. Borges (Modificado)';

// 1. Obtenemos los libros del autor seleccionado utilizando la función de la primera parte.
const borgesBooksPart2 = filterBooksByAuthor(books, authorToFilterPart2);
console.log(`Libros de ${authorToFilterPart2} (antes de modificar):`, borgesBooksPart2);

// 2. Modificamos el nombre del autor de los libros que obtuvimos.
const modifiedBorgesBooksPart2 = modifyAuthorName(borgesBooksPart2, newAuthorPart2);
console.log(`Libros de ${authorToFilterPart2} (después de modificar):`, modifiedBorgesBooksPart2);

// 3. Verificamos el array original 'books'. ¡Notarás que ha sido modificado!
console.log("Array original 'books' (después de la segunda parte):", books);

// *** TERCERA PARTE ***
console.log("\n*** TERCERA PARTE ***\n");

// Esta función 'filterBooksByAuthorImproved' ahora permite filtrar por
// una parte del nombre del autor (nombre completo o apellido).
function filterBooksByAuthorImproved(books, authorQuery) {
  // Convertimos la 'authorQuery' a minúsculas para hacer la búsqueda
  // insensible a mayúsculas y minúsculas.
  const queryLower = authorQuery.toLowerCase();
  // Utilizamos 'filter' para crear un nuevo array con los libros que coinciden.
  return books.filter(book => {
    // Convertimos el nombre del autor del libro actual a minúsculas para la comparación.
    const authorLower = book.author.toLowerCase();
    // El método 'includes' verifica si una cadena contiene otra cadena.
    // Aquí, verificamos si el nombre del autor del libro (en minúsculas)
    // incluye la 'authorQuery' (también en minúsculas).
    return authorLower.includes(queryLower);
  });
}

// Creamos una copia del array 'books' para no modificar el original en estos ejemplos.
const booksPart3 = [...books];

const borgesFullPart3 = filterBooksByAuthorImproved(booksPart3, 'Jorge Luis Borges');
console.log("Libros filtrados por 'Jorge Luis Borges':", borgesFullPart3);

const borgesApellidoPart3 = filterBooksByAuthorImproved(booksPart3, 'Borges');
console.log("Libros filtrados por 'Borges':", borgesApellidoPart3);

const cortazarApellidoPart3 = filterBooksByAuthorImproved(booksPart3, 'Cortázar');
console.log("Libros filtrados por 'Cortázar':", cortazarApellidoPart3);

// *** CUARTA PARTE ***
console.log("\n*** CUARTA PARTE ***\n");

// Para corregir el comportamiento de la segunda parte (modificar el array original),
// podemos modificar las funciones para que trabajen con copias de los objetos.

// 'filterBooksByAuthorSafe' ahora crea una copia superficial de cada libro
// que pasa el filtro, asegurando que las modificaciones posteriores no afecten
// al objeto original en el array 'books'.
function filterBooksByAuthorSafe(books, authorName) {
  return books.filter(book => book.author === authorName)
               .map(book => ({ ...book })); // El spread operator crea una copia del objeto
}

// 'modifyAuthorNameSafe' ahora toma un array de libros y devuelve un NUEVO
// array donde cada libro es una copia del original con el nombre del autor modificado.
function modifyAuthorNameSafe(booksArray, newAuthorName) {
  return booksArray.map(book => ({ ...book, author: newAuthorName }));
}

// Creamos otra copia del array original 'books' para esta parte.
const booksPart4 = [...books];

const authorToFilterPart4 = 'Mario Vargas Llosa';
const newAuthorPart4 = 'M. Vargas Llosa (Corregido)';

// Filtramos los libros de Mario Vargas Llosa de forma segura (obteniendo copias).
const vargasLlosaBooksPart4Original = filterBooksByAuthorSafe(booksPart4, authorToFilterPart4);
console.log(`Libros de ${authorToFilterPart4} (original - copias):`, vargasLlosaBooksPart4Original);

// Modificamos el nombre del autor en el nuevo array de copias.
const modifiedVargasLlosaBooksPart4 = modifyAuthorNameSafe(vargasLlosaBooksPart4Original, newAuthorPart4);
console.log(`Libros de ${authorToFilterPart4} (modificado - copias):`, modifiedVargasLlosaBooksPart4);

// Verificamos el array original 'booksPart4'. ¡Ahora no debería haber sido modificado!
console.log("Array original 'books' (después de la cuarta parte):", booksPart4);

// Otro ejemplo de cómo modificar sin afectar el original si ya tienes el array filtrado:
const librosDeCortazarSafe = filterBooksByAuthorSafe(books, 'Julio Cortázar');
const cortazarModificadoSafe = librosDeCortazarSafe.map(libro => ({ ...libro, author: 'J. Cortázar (Nuevo)' }));
console.log("\nLibros de Cortázar (modificados sin afectar original):", cortazarModificadoSafe);
console.log("Array original 'books' (otra vez):", books);