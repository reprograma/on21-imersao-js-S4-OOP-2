class Author {
  nameAuthor;
  #email;
  #birthdate;

  constructor(nameAuthor, email, birthdate) {
    this.nameAuthor = nameAuthor;
    this.#email = email;
    this.#birthdate = birthdate;
  }

  get nameAuthor() {
    return this.nameAuthor;
  }

  get email() {
    return this.#email;
  }

  get birthdate() {
    return this.#birthdate;
  }

  getNameAuthor() {
    return `The author's name is ${this.nameAuthor}`;
  }

  getEmail() {
    return `The author's email is ${this.#email}`;
  }

  getBirthDate() {
    return `The author's birthDate is ${this.#birthdate}`;
  }

  set nameAuthor(updateName) {
    this.nameAuthor = updateName;
    return `Name has been updated successfully`;
  }

  set email(updateEmail) {
    this.#email = updateEmail;
    return `Email has been updated successfully`;
  }

  set birthdate(updateBirthdate) {
    this.#birthdate = updateBirthdate;
    return `Birthdate has been updated successfully`;
  }

  setNameAuthor(updateNameAuthor) {
    const newName = (this.nameAuthor = updateNameAuthor);
    return `Name has been updated successfully`;
  }

  setEmail(updateEmail) {
    const newEmail = (this.#email = updateEmail);
    return `Email has been updated successfully`;
  }

  setBirthDate(updateBirthDate) {
    const newBirthDate = (this.#birthdate = updateBirthDate);
    return `BirthDate has been updated successfully`;
  }
}

module.exports = Author;
