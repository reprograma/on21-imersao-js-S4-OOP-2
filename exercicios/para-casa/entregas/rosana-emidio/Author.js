class Author{
    #name
    #email
    #birthdate

    constructor(name, email, birthdate){
        this.#name = name;
        this.#email = email;
        this.#birthdate = birthdate;
    }

    get name(){
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get birthdate() {
        return this.#birthdate;
    }

    set name(newName) {
        return this.#name = newName;
    }

    set email(newEmail) {
        return this.#email = newEmail;
    }

    set birthdate(newBirthdate) {
        return this.#birthdate = newBirthdate;
    }
}
module.exports = Author;

const novoAutor = new Author('Hermione', 'mione@hogwarts.com', '02/10/1989')
console.log(novoAutor);
console.log(novoAutor.name);
