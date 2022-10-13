class Author {
  #name;
  #email;
  #birthday;

  constructor(name, email, birthday) {
    this.#name = name;
    this.#email = email;
    this.#birthday = birthday;
  }
  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get birthday() {
    return this.#birthday;
  }

  set name(newName) {
    this.#name = newName;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  set birthday(newBirthday) {
    this.#birthday = newBirthday;
  }

  toString() {
    return `Author[name=${this.#name}, email=${this.#email}, birthday=${
      this.#birthday
    }]`;
  }
}

const dadosAuthor = new Author("Mabia", "duartecostap@gmail.com", "03/12/1993");

console.log(dadosAuthor.email);

class Book {
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

  set Price(newPrice) {
    this.#price = newPrice;
  }

  set Qty(newQty) {
    this.#qty = newQty;
  }
}

const livroReceitas = new Book(
  "Livro de Receitas Veganas",
  "4433",
  "Mabia",
  "27.5",
  "2.000"
);

console.log(livroReceitas.qty);
