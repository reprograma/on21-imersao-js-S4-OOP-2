module.exports = class Book {
  #name;
  #isbn;
  #author;
  #price;
  #qty;

  constructor(name, isbn, author, price, qty) {
    this.#name = name;
    this.#isbn = isbn;
    this.#author = author;
    this.#price = price;
    this.#qty = qty;
  }

  get name() {
    return this.#name;
  }

  get isbn() {
    return this.#isbn;
  }

  get author() {
    return this.#author;
  }

  get price() {
    return this.#price;
  }

  get qty() {
    return this.#qty;
  }
};
