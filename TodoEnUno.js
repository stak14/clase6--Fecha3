const books = [
  { title: "El Aleph", author: "Jorge Luis Borges" },
  { title: "La ciudad y los perros", author: "Mario Vargas Llosa" },
  { title: "Cien años de soledad", author: "Gabriel García Márquez" },
  { title: "Rayuela", author: "Julio Cortázar" },
  { title: "Ficciones", author: "Jorge Luis Borges" },
  { title: "El hacedor", author: "Jorge Luis Borges" },
  { title: "Los pasos perdidos", author: "Alejo Carpentier" },
  { title: "El reino de este mundo", author: "Alejo Carpentier" },
  { title: "La fiesta del chivo", author: "Mario Vargas Llosa" },
  { title: "La tía Julia y el escribidor", author: "Mario Vargas Llosa" },
  {
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
  },
  {
    title: "El amor en los tiempos del cólera",
    author: "Gabriel García Márquez",
  },
  { title: "Bestiario", author: "Julio Cortázar" },
  { title: "Las armas secretas", author: "Julio Cortázar" },
];

// *** PRIMERA PARTE ***
console.log("\n*** PRIMERA PARTE ***\n");

function filterBooksByAuthor(books, authorName) {
  return books.filter((book) => {
    return book.author === authorName;
  });
}

const authorToFilterPart1 = "Jorge Luis Borges";
const borgesBooksPart1 = filterBooksByAuthor(books, authorToFilterPart1);
console.log(`Libros de ${authorToFilterPart1}:`, borgesBooksPart1);

// *** SEGUNDA PARTE ***
console.log("\n*** SEGUNDA PARTE ***\n");

function modifyAuthorName(booksArray, newAuthorName) {
  booksArray.forEach((book) => {
    book.author = newAuthorName;
  });

  return booksArray;
}

const authorToFilterPart2 = "Jorge Luis Borges";
const newAuthorPart2 = "J.L. Borges (Modificado)";

const borgesBooksPart2 = filterBooksByAuthor(books, authorToFilterPart2);
console.log(
  `Libros de ${authorToFilterPart2} (antes de modificar):`,
  borgesBooksPart2
);

const modifiedBorgesBooksPart2 = modifyAuthorName(
  borgesBooksPart2,
  newAuthorPart2
);
console.log(
  `Libros de ${authorToFilterPart2} (después de modificar):`,
  modifiedBorgesBooksPart2
);

console.log("Array original 'books' (después de la segunda parte):", books);

// *** TERCERA PARTE ***
console.log("\n*** TERCERA PARTE ***\n");

function filterBooksByAuthorImproved(books, authorQuery) {
  const queryLower = authorQuery.toLowerCase();

  return books.filter((book) => {
    const authorLower = book.author.toLowerCase();

    return authorLower.includes(queryLower);
  });
}

const booksPart3 = [...books];

const borgesFullPart3 = filterBooksByAuthorImproved(
  booksPart3,
  "Jorge Luis Borges"
);
console.log("Libros filtrados por 'Jorge Luis Borges':", borgesFullPart3);

const borgesApellidoPart3 = filterBooksByAuthorImproved(booksPart3, "Borges");
console.log("Libros filtrados por 'Borges':", borgesApellidoPart3);

const cortazarApellidoPart3 = filterBooksByAuthorImproved(
  booksPart3,
  "Cortázar"
);
console.log("Libros filtrados por 'Cortázar':", cortazarApellidoPart3);

// *** CUARTA PARTE ***
console.log("\n*** CUARTA PARTE ***\n");

function filterBooksByAuthorSafe(books, authorName) {
  return books
    .filter((book) => book.author === authorName)
    .map((book) => ({ ...book }));
}

function modifyAuthorNameSafe(booksArray, newAuthorName) {
  return booksArray.map((book) => ({ ...book, author: newAuthorName }));
}

const booksPart4 = [...books];

const authorToFilterPart4 = "Mario Vargas Llosa";
const newAuthorPart4 = "M. Vargas Llosa (Corregido)";

const vargasLlosaBooksPart4Original = filterBooksByAuthorSafe(
  booksPart4,
  authorToFilterPart4
);
console.log(
  `Libros de ${authorToFilterPart4} (original - copias):`,
  vargasLlosaBooksPart4Original
);

const modifiedVargasLlosaBooksPart4 = modifyAuthorNameSafe(
  vargasLlosaBooksPart4Original,
  newAuthorPart4
);
console.log(
  `Libros de ${authorToFilterPart4} (modificado - copias):`,
  modifiedVargasLlosaBooksPart4
);

console.log("Array original 'books' (después de la cuarta parte):", booksPart4);

const librosDeCortazarSafe = filterBooksByAuthorSafe(books, "Julio Cortázar");
const cortazarModificadoSafe = librosDeCortazarSafe.map((libro) => ({
  ...libro,
  author: "J. Cortázar (Nuevo)",
}));
console.log(
  "\nLibros de Cortázar (modificados sin afectar original):",
  cortazarModificadoSafe
);
console.log("Array original 'books' (otra vez):", books);
