export class Author {
    _nameAuthor;
    #email
    #birthdate;

    constructor(nameAuthor, email, birthdate) {
        this._nameAuthor = nameAuthor;
        this.#email = email;
        this.#birthdate = birthdate;
    }

    get nameAuthor() {
        return this._nameAuthor
    }

    set nameAuthor(newNameAuthor) {
        this._nameAuthor = newNameAuthor
    }

    get email() {
        return this.#email
    }

    set email(newEmail) {
        this.#email = newEmail
    }

    get birthdate() {
        return this.#birthdate
    }

    set birthdate(newBirthdate) {
        this.#birthdate = newBirthdate
    }
}