//- Escreva uma classe chamada `Author`, uma classe que representa um autor de livros.
//-  Essa classe contém:
//    - Três atributos privados: `name` (String), `email` (String), e `birthdate` (Date ou DateTime);
//    - Um método construtor que inicialize `name`, `email` e `birthdate` com os valores passados;
//    `class Author(name, email) {......}`
//    - Métodos de acesso público (getter/setter) para cada um dos atributos;

class Author{

    #name;
    #email;
    #birthDate;

    constructor(name, email, birthdate){
        this.#name = name;
        this.#email = email;
        this.#birthDate = birthdate;
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        this.#name = newName;
    }

    get email(){
        return this.#email;
    }

    set email(newEmail){
        this.#email = newEmail;
    }

    get birthDate(){
        return this.#birthDate;
    }

    set birthDate(newBirthDate){
        this.#birthDate = newBirthDate;
    }
}


module.exports = Author;