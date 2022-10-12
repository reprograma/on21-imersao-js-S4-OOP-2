const Autor = require('./Author.js')
const Livro = require('./Book.js')


const createAuthor = new Autor("Alexandre Rangel", "rangel@teste", "15/09/1978");
const createBook = new Livro('O que podemos aprender com os Gansos', '978-85-7785-545-2', createAuthor, 20.00, 1)


console.log(createBook.autor);
 console.log(createBook.autor.autor);

console.log(createAuthor.getName());
 console.log(createAuthor.setName('Anna'));

