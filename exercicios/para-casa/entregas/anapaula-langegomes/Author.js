export class Author {

    class Author {
        #name;
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
        
        set name(name) {
            return this.#name = name;
        }
}

