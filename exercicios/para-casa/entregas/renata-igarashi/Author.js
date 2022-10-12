export class Author {

    _authorsName
    #email
    #birthdate
    
    constructor(authorsName, email, birthdate) {
        this._authorsName = authorsName
        this.#email = email
        this.#birthdate = birthdate
    }
    get authorsName(){
        return this._authorsName
    }

    set authorsName(newName) {
        return this._authorsName = newName
    }

    get email(){
        return this.#email
    }

    set email(newEmail) {
        return this.#email = newEmail
    }
    get birthdate(){
        return this.#birthdate
    }

    set birthdate(newBirthdate) {
        return this.#birthdate = newBirthdate
    }

}
