class Author{
    #nameAuthor
    #email
    #birthday
    constructor(nameAuthor, email, birthdate){
        this.#nameAuthor = nameAuthor;
        this.#email = email;
        this.#birthday = birthdate;
    }

    get nameAuthor(){
        return this.#nameAuthor;
    }

    get email(){
        return this.#email;
    }

    get birthday(){
        return this.#birthday;
    }

    set nameAuthor(nameAuthor) {
        this.#nameAuthor = nameAuthor;
    }
}
module.exports = Author