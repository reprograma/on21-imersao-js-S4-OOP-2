import { Author } from "./Author.js";
import { Book } from "./Book.js";

const createAuthor = new Author("Alexandre Rangel", "rangel@teste", "15/09/1978");
const createBook = new Book(createAuthor, 'O que podemos aprender com os Gansos', '978-85-7785-545-2', 20.00, 1)


console.log(createBook.name);
console.log(createBook.getNameBook());

console.log(createAuthor.name);
createAuthor.name = 'teste'
console.log(createAuthor.name);


