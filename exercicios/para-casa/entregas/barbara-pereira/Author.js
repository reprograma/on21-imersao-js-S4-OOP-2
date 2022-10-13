/**
Três atributos privados: nameAuthor (String), email (String), e birthdate (Date ou DateTime);
Um método construtor que inicialize nameAuthor, email e birthdate com os valores passados;
class Author(nameAuthor, email) {......}

Métodos de acesso público (getter/setter) para cada um dos atributos; */

class Author{
    #nameAuthor;
    #emailAuthor;
    #birthDate;

    constructor(name, email, date){
        this.#nameAuthor = name;
        this.#emailAuthor = email;
        this.#birthDate = date;
    }

    get nameAuthor(){
        return this.#nameAuthor;
    }

    set nameAuthor(name){
        return this.#nameAuthor = name;
    }

    get emailAuthor(){
        return this.#emailAuthor;
    }

    set emailAuthor(email){
        return this.#emailAuthor = email;
    }

    get birthDate(){
        return this.#birthDate;
    }

    set birthDate(date){
        return this.#birthDate = date;
    }

    getAuthor(name, email,date){
        return `O autor ${name}, possui o email: ${email} e nasceu no dia ${date}`;
    }
}
const author1 = new Author('Bárbara', 'barbara@gamil.com', '20/07/90');
/*
console.log(author1);
console.log(author1.nameAuthor);
console.log(author1.nameAuthor = 'Beatriz');
console.log(author1.getAuthor('Bárbara', 'barbara@gamil.com', '20/07/90'));
*/
module.exports = Author;
