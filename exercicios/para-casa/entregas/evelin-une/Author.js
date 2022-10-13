export class Author {
    _authorName;
    #email;
    #birthdate;

    constructor(authorName, email, birthdate){
        this._authorName = authorName
        this.#email = email;
        this.#birthdate = birthdate;
    }

    get authorName(){
        return this._authorName;
    }
    
    set authorName(newAuthorName){
        this._authorName = newAuthorName;
    }

    get email(){
        return this.#email;
    }
    
    set email(newEmail){
        this.#email = newEmail;
    }
    
    get birthdate(){
        return this.#birthdate;
    }

    set birthdate(newBirthdate){
        this.#birthdate = newBirthdate;
    }

}
