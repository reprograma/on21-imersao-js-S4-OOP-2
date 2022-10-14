/*
    -  Escreva também uma classe chamada `Book`, essa classe contém:
    - Quatro variáveis privadas: `name` (String), `isbn` (String), `author` 
    (Author, assuma que o livro só tem um único autor), `price` (double), e `qty` (int);
  
    - Métodos acessores: `getName()`, `getISBN()`, `getAuthor()`, `getPrice()`, `setPrice()`, `getQty()`, `setQty()`
    -  Por fim, escreve uma classe principal que instancie um livro (`Book`), e imprima o nome do autor através da instância de `Book`.
    - 
*/

const Author = require("./Author");

class Book extends Author {
  #name;
  #isbn;
  #price;
  #qty;
  constructor(name, isbn, authorName, price, qty) {
    super(authorName);
    this.#name = name;
    this.#isbn = isbn;
    this.#price = price;
    this.#qty = qty;
  }

  getName() {
    return this.#name;
  }

  getISBN() {
    return this.#isbn;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(price) {
    return (this.#price = price);
  }

  getQty() {
    return this.#qty;
  }

  setQty(qty) {
    return (this.#qty = qty);
  }
}

const newBook = new Book("A Culpa das Estrelas", "123", "John Green", 40, 1);
console.log(newBook.authorName);
newBook.authorName = "Cláudia";
console.log(newBook.authorName);
console.log(newBook.getPrice());
newBook.setPrice(20);
console.log(newBook.getPrice());
newBook.setQty(3);
console.log(newBook.getQty());
