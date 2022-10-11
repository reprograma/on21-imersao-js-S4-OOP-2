export class Author {
    #name;
    #email;
    #birthdate;

    constructor(name, email, birthdate){
        this.#name = name;
        this.#email = email;
        this.#birthdate = birthdate
    }

    get name(){
        return this.#name
    };
    
    get email(){
        return this.#email
    };

    get birthdate(){
        return this.#birthdate
    };

    set name(changeName){
        return this.#name = changeName
    };

    set email(changeEmail){
        return this.#email = changeEmail
    };

    set birthdate(changeBirthdate){
        return this.#birthdate = changeBirthdate
    };

    getName(){
        return this.#name
    };

    setName(changeName){
        return this.name = changeName
    }
}