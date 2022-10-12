// Explicação do exercício:

// - Escreva uma classe chamada `Author`, uma classe que representa um autor de livros.
// -  Essa classe contém:
//     - Três atributos privados: `name` (String), `email` (String), e `birthdate` (Date ou DateTime);
//     - Um método construtor que inicialize `name`, `email` e `birthdate` com os valores passados;

//     `class Author(name, email) {......}`

//     - Métodos de acesso público (getter/setter) para cada um dos atributos;

//     -  Escreva também uma classe chamada `Book`, essa classe contém:
//     - Quatro variáveis privadas: `name` (String), `isbn` (String), `author` (Author, assuma que o livro só tem um único autor), `price` (double), e `qty` (int);

//     - Métodos acessores: `getName()`, `getISBN()`, `getAuthor()`, `getPrice()`, `setPrice()`, `getQty()`, `setQty()`
//     -  Por fim, escreve uma classe principal que instancie um livro (`Book`), e imprima o nome do autor através da instância de `Book`.
//     -
//     ---

const Author = require("./Author.js");

class Book extends Author {
  #name;
  #isbn;
  #price;
  #qty;

  constructor(name, isbn, price, qty, nameAuthor) {
    super(nameAuthor);
    this.#name = name;
    this.#isbn = isbn;
    this.#price = price;
    this.#qty = qty;
  }

  get name() {
    return this.#name;
  }

  get isbn() {
    return this.#isbn;
  }

  get price() {
    return this.#price;
  }

  get price() {
    return this.#price;
  }

  get qty() {
    return this.#qty;
  }
  set price(newPrice) {
    this.#name = newPrice;
  }

  set qty(newQty) {
    this.#qty = newQty;
  }

  getAuthorBook() {
    return `O nome do autor do livro é ${this.nameAuthor}`;
  }
  daddosBook() {
    return ` ${this.#name}, ${this.#isbn}, ${this.#price}, , ${this.#qty}, ${
      this.nameAuthor
    }`;
  }
}
const author = new Author("Chimamanda", "Chimamanda@gmail.com", "01/01/1991");
const cadastroLivro = new Book("Hibisco roxo", "isb", 10.0, 1.0, author);

console.log(cadastroLivro.getAuthorBook());
console.log(cadastroLivro.daddosBook());

module.exports = Book;
