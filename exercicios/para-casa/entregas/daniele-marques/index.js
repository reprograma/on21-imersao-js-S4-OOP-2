class Author {
  #name;
  #email;
  #birthdate;

  constructor(name, email, birthdate) {
    this.#name = name;
    this.#email = email;
    this.#birthdate = birthdate;
  }

  get name() {
    return this.#name;
  }
  set name(param) {
    this.#name = param;
  }
  get email() {
    return this.#email;
  }
  set email(param) {
    this.#email = param;
  }
  get birthdate() {
    return this.#birthdate;
  }
  set birthdate(param) {
    this.#birthdate = param;
  }
}

class Book {
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

class Principal {
  book = () => {
    const book = new Book(
      "O Senhor dos Anéis",
      9788845292613,
      "J. R. R. Tolkien",
      126,
      90,
      1
    );
    return book;
  };
}

const instanceBook = new Principal();

console.log(instanceBook.book().author);
