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

    getEmail() {
      return this.#email;
    }

    getBirthdate() {
      return this.#birthdate;
    }

    setNameAuthor(newName) {
      this.#nameAuthor = newName;
    }

    setEmail(newEmail) {
      this.#email = newEmail;
    }

    setBirthdate(newBirthdate) {
      this.#birthdate = newBirthdate;
    }


    toString() {
      return `O autor/a/x da obra é ${this.#nameAuthor}, seu e-mail é ${this.#email} e sua data de aniversáio é ${this.#birthdate}. Manda voucher`;
    }
  }
  const novoAuthor = new Author('Andressa Valentina','av@gmail.com', '1990-01-29');

console.log(novoAuthor.toString());

  module.exports = Author;