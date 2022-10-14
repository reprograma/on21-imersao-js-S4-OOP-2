export class Author {

class Author {
    #nameAuthor;
    #email;
    #birthdate;
      
    constructor(name, email, birthdate){
        this.#name = name;
        this.#email = email;
        this.#birthdate = birthdate;
        }

        get name(){
            return this.#name;
        }
        
        set nameAuthor(name) {
            return this.#name = name;
        }

        get emailAuthor(){
            return this.#email;
        }
    
        set emailAuthor(email){
            return this.#email = email;
        }
    
        get birthdate(){
            return this.#birthdate;
        }
    
        set birthdate(date){
            return this.#birthdate = date;
        }
}

