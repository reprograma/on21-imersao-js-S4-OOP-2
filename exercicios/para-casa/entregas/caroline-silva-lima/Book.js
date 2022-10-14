const Author = require("./Author.js");

class Book extends Author {
  #nameBook;
  #isbn;
  #price;
  #qty;

  constructor(nameBook, isbn, price, qty, nameAuthor) {
    super(nameAuthor);
    this.#nameBook = nameBook;
    this.#isbn = isbn;
    this.#price = price;
    this.#qty = qty;
  }

  get name() {
    return this.#nameBook;
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
    this.#price = newPrice;
  }

  set qty(newQty) {
    this.#qty = newQty;
  }

  getAuthorBook() {
    return `O nome do autor deste livro é ${this.nameAuthor}`;
  }
  infosBook() {
    return `Nome do livro: ${this.#nameBook}, ${this.#isbn}, ${this.#price} , ${this.#qty}. O autor da obre é ${
      this.nameAuthor
    }`;
  }
}

module.exports = Book;