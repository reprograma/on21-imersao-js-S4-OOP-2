const author = require("./Author.js");
const book = require("./Book.js");

const author1 = new author("J.R.Tolkien", "email@email.com", "20/20/2020");
const book1 = new book("O Senhor dos Anéis", 123456789, author1, 59.6, 5);

console.log(book1.author.name);
