const Book = require("./Book.js");

class Main {
  constructor() {}

  print() {
    let book = new Book("José de Alencar", "Senhora", 54321, 90, 2);
    return book.getNameAuthor();
  }
}

module.exports = Main;
