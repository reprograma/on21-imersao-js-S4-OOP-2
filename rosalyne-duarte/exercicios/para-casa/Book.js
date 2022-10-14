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
  dadosBook() {
    return ` ${this.#name}, ${this.#isbn}, ${this.#price}, , ${this.#qty}, ${
      this.nameAuthor
    }`;
  }
}
const author = new Author("Rosalyne Duarte", "rosalyneduarte@gmail.com", "25/02/1991");
const cadastroLivro = new Book("Dora Aventureira", "isb", 10.0, 1.0, author);

console.log(cadastroLivro.getAuthorBook());
console.log(cadastroLivro.daddosBook());

module.exports = Book;