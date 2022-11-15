const Author = require("./Author.js");

module.exports = class Book extends Author {
  #title;
  #isbn;
  #price;
  #qty;

  constructor(title, isbn, name, price, qty) {
    super(name);
    this.#title = title;
    this.#isbn = isbn;
    this.#price = price;
    this.#qty = qty;
  }

  get title() {
    return this.#title;
  }

  get isbn() {
    return this.#isbn;
  }

  get price() {
    return this.#price;
  }

  get qty() {
    return this.#qty;
  }
};