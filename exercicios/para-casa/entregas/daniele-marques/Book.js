export class Book {
  #name;
  #isbn;
  #author;
  #price;
  #qty;

  constructor(name, isbn, author, price, qty) {
    this.#author = author;
    this.#isbn = isbn;
    this.#name = name;
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

  set price(param) {
    this.#price = param;
  }

  set qty(param) {
    this.#qty = param;
  }
}
