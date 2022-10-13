const Author = require('./Author.js')
const Book = require('./Book.js')


const novoAuthor = new Author("Gil Vicente", "vicente@gmail.com", "1465 (somente o ano)");
const novoBook = new Book('Auto da barco do inferno', '9783748552796', novoAuthor, 50, 3)


console.log(novoAuthor.name);
console.log(novoAuthor.email)
console.log(novoAuthor.birthdate)

console.log(novoBook.isbn)
console.log(novoBook.price)
