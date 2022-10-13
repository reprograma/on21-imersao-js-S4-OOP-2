import { Book } from "./Book.js";
import { Author } from "./Author.js";

const createAuthor1 = new Author("Lauren Kate", "laurenkate@email.com", "21/03/1981");
console.log(createAuthor1);

const createBook1 = new Book("Fallen", 12345, 30.00, 10, "Lauren Kate")
console.log(createBook1);

