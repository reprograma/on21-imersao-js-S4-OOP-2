export class Author {
    #authorName;
    #email;
    #birthdate;

    constructor(name, email, birthdate) {
        this.#authorName = name;
        this.#email = email;
        this.#birthdate = birthdate;
    }

    get authorName(){
        return this.#authorName;
    }

    set authorName(newName){
        return this.#authorName = newName;
    }

    get email(){
        return this.#email;
    }

    set email(email){
        return this.#email = email;
    }

    get birthdate(){
        return this.#birthdate
    }

    set birthdate(birthdate){
        return this.#birthdate = birthdate;
    }

    setName(name){
        return this.#authorName = name;
    }

    getName(){
        return `O nome da Autora é ${this.#authorName}`
    }

    getEmail(){
        return `Email de contato ${this.#email}`
    }

    getBirthdate(){
        return `O aniversário da Autora ${this.#birthdate}`
    }

    getAuhtorData() {
        return `A Autora se chama ${this.#authorName} e seu email para contato é ${this.#email} e o seu aniversário é no dia ${this.#birthdate}`
    }
}

const AuthorData = new Author('Eva Heller', 'evaheller@gmail.com', '08/04/1948')
