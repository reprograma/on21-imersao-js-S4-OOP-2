const Author = require("./Author");

class Book extends Author {
  #nameBook;
  #isbn;
  #price;
  #qty;

  constructor(nameBook, nameAuthor, isbn, price, qty) {
    super(nameAuthor);
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

  get price() {
    return this.#price;
  }

  get qty() {
    return this.#qty;
  }

  getNameBook() {
    return `The name of the Book is ${this.#nameBook}`;
  }

  getIsbn() {
    return `The isbn of the Book is ${this.#isbn}`;
  }

  getPrice() {
    return `The price of the Book is ${this.#price}`;
  }

  getQtd() {
    return `The qtd of the Book is ${this.#qty}`;
  }

  set nameBook(updateNameBook) {
    return (this.#nameBook = updateNameBook);
  }

  set isbn(updateIsbn) {
    return (this.#isbn = updateIsbn);
  }

  set price(updatePrice) {
    return (this.#price = updatePrice);
  }

  set qty(updateQtd) {
    return (this.#qty = updateQtd);
  }

  setNameBook(updateNameBook) {
    const newName = (this.#nameBook = updateNameBook);
    return `Name has been updated successfully`;
  }

  setIsbn(updateIsbn) {
    const newIsbn = (this.#isbn = updateIsbn);
    return `Isbn has been updated successfully`;
  }

  setPrice(updatePrice) {
    const newPrice = (this.#price = updatePrice);
    return `Price has been updated successfully`;
  }

  seQty(updateQtd) {
    const newQtd = (this.#qty = updateQtd);
    return `Qtd has been updated successfully`;
  }

  nameBookAuthor() {
    return `The name of the Author of the book ${this.#nameBook} is ${
      this.nameAuthor
    }`;
  }
}

module.exports = Book;
