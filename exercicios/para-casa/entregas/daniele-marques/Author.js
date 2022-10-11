export class Author {
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
