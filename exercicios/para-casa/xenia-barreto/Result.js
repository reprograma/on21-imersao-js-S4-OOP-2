import { Author } from "./Author.js";
import { Book } from "./Book.js";

const createAuthor = new Author("Alexandre Rangel", "rangel@teste", "15/09/1978");
const createBook = new Book('O que podemos aprender com os Gansos', '978-85-7785-545-2', createAuthor, 20.00, 1)


console.log(createBook.name);
console.log(createBook.author.name);

console.log(createAuthor.getName());
console.log(createAuthor.setName('Xênia'));



