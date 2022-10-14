class Author {
    #nameAuthor;
    #email;
    #birthdate;

    constructor(nameAuthor, email, birthdate) {
        this.#nameAuthor = nameAuthor;
        this.#email = email;
        this.#birthdate = birthdate;
    }
    get nameAuthor() {
        return this.#nameAuthor;
    }
    set nameAuthor(valorName) {
        this.#nameAuthor = valorName;
    }
    get email() {
        return this.#email;
    }
    set email(valorEmail) {
        this.#email = valorEmail;
    }
    get birthdate() {
        return this.#birthdate;
    }
    set birthdate(valorBirthdate) {
        this.#birthdate = valorBirthdate;
    }
}

module.exports = Author;