const Author = require("./Author");

class Book extends Author {
  #title;
  #isbn;
  #author;
  #price;
  #qty;

  constructor(title, isbn, author, price, qty, name) {
    super(name);
    this.#title = title;
    this.#isbn = isbn;
    this.#author = author;
    this.#price = price;
    this.#qty = qty;
  }

  get author() {
    return "Autor do livro: " + this.#author;
  }

  get title() {
    return "Título do livro: " + this.#title;
  }

  get isbn() {
    return "Número ISBN: " + this.#isbn;
  }

  get price() {
    return "Preço unitário: " + this.#price;
  }

  get qty() {
    return "Quantidade disponível: " + this.#qty;
  }

  set title(newTitle) {
    return (this.#title = newTitle);
  }

  set isbn(newIsbn) {
    return (this.#isbn = newIsbn);
  }

  set author(newAuthor) {
    return (this.#author = newAuthor);
  }

  set price(newPrice) {
    return (this.#price = newPrice);
  }

  set qty(newQty) {
    return (this.#qty = newQty);
  }
}

module.exports = Book;

const livro1 = new Book(
  "A farça da boa preguiça",
  "8503007304",
  "Ariano Suassuna",
  20,
  5
);

console.log(livro1.title);
console.log(livro1.author);
console.log(livro1.qty);
console.log(livro1.isbn);
console.log("*********************");
