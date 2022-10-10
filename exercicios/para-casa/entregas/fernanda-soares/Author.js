module.exports = class Author {
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

  set name(newName) {
    return (this.#name = newName);
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    return (this.#email = newEmail);
  }

  get birthdate() {
    return this.#birthdate;
  }

  set birthdate(newBirthdate) {
    return (this.#birthdate = newBirthdate);
  }
};
