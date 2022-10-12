class Author {
  #nameAuthor;
  #email;
  #birthdate;

  constructor(nameAuthor, email, birthdate) {
    this.#nameAuthor = nameAuthor;
    this.#email = email;
    this.#birthdate = birthdate;
  }

  getNameAuthor() {
    return this.#nameAuthor;
  }
  get nameAuthor() {
    return this.#nameAuthor;
  }

  get email() {
    return this.#email;
  }

  get birthdate() {
    return this.#birthdate;
  }

  set nameAuthor(newName) {
    this.#nameAuthor = newName;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  set birthdate(newBirthdate) {
    this.#birthdate = newBirthdate;
  }

  toString() {
    return `Author[name=${this.#nameAuthor}, email=${this.#email}, birthdate=${
      this.#birthdate
    }]`;
  }
}

const dadosAuthor = new Author(
  "Chimamanda",
  "Chimamanda@gmail.com",
  "01/01/1991"
);

console.log(dadosAuthor.getNameAuthor());

module.exports = Author;
