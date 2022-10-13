const Author = require("./Author.js");
class Book extends Author {
  constructor(nameAuthor, nameBook, isbn, price, qty) {
    super(nameAuthor);
    this.nameBook = nameBook;
    this.isbn = isbn;
    this.price = price;
    this.qty = qty;
  }

  getNameAuthor() {
    return this.nameAuthor;
  }

  getNameBook() {
    return this.nameBook;
  }

  getIsbn() {
    return this.isbn;
  }

  getPrice() {
    return this.price;
  }

  getQty() {
    return this.qty;
  }
}

module.exports = Book;
