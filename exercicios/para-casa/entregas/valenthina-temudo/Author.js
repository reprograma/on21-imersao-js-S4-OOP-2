class Author {
  #name;
  #email;
  #birthdate;

  constructor(name, email, birthdate){
    this.#name = name;
    this.#email = email;
    this.#birthdate = birthdate;
  }

  //NAME
  get name(){
    return this.#name;
  }

  set name(name) {
    return this.#name = name;
  }

  getName() {
    return `Nome do Autor: ${this.#name}`;
  }

  setName(name) {
    this.#name = name;
    return `O nome do Autor agora é: ${this.#name}`;
  }

  //EMAIL
  get email() {
    return this.#email;
  }

  set email(email) {
    return this.#email = email;
  }

  getEmail() {
    return `Email: ${this.#email}`;
  }

  setName(email) {
    this.#email = email;
    return `O Email agora é: ${this.#email}`;
  }

  //BIRTHDATE
  get birthdate() {
    return this.#birthdate;
  }

  set birthdate(birthdate) {
    return this.#birthdate = birthdate;
  }

  getbirthdate() {
    return `Data de aniversário: ${this.#birthdate}`;
  }

  setName(birthdate) {
    this.#birthdate = birthdate;
    return `A nova data de aniversário é: ${this.#birthdate}`;
  }

}

module.exports = Author;

const Autora = new Author("Valenthina Maria Temudo", "temudo.valenthina@gmail.com", "09/09/1996")
