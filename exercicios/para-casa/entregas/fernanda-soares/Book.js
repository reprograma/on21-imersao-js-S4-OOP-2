const Author = require("./Author.js");

module.exports = class Book extends Author {
  #nameBook;
  #isbn;
  #name;
  #price;
  #qty;

  constructor(nameBook, isbn, name, price, qty) {
    super(name);
    this.#nameBook = nameBook;
    this.#isbn = isbn;
    this.#price = price;
    this.#qty = qty;
  }

  get nameBook() {
    return this.#nameBook;
  }

  get isbn() {
    return this.#isbn;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  get qty() {
    return this.#qty;
  }
};
