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
    return ('Nome do Autor: ' + this.#name);
  }

  set name(name) {
    return (this.#name = name);
  }
  get email() {
    return ('Email do Autor: ' + this.#email);
  }
  set email(email) {
    return (this.#email = email);
  }
  get birthdate() {
    return ('Data de Aniversário do Autor: ' + this.#birthdate);
  }
  set birthdate(birthdate) {
    return (this.#birthdate = birthdate);
  }
}

module.exports = Author;

const arianoSuassuna = new Author(
  "Ariano Vilar Suassuna",
  "suassuna@gmail.com",
  "16/06/1927"
);

console.log(arianoSuassuna.name);
console.log(arianoSuassuna.email);
console.log(arianoSuassuna.birthdate);

console.log("*********************");
