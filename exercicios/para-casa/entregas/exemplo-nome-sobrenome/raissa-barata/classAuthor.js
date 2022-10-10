// falta herdar a classe autor 

class Author {
    #name
    #email
    #birthdate
    constructor(name, email, birthdate) {
        this.#name = name
        this.#email = email
        this.#birthdate = birthdate
    }

    get name() {
        return this.#name
    }
    get email() {
        return this.#email
    }
    get birthdate() {
        return this.#birthdate
    }

    //eu perciso colocar um return no set já que ele apenas executa algo dentro da classe e nao precisa teoricamente retornar nada.
    set name(newName) {
        return this.#name = newName
    } 
    set email(newEmail) {
        return this.#email = newEmail
    }
    set birthdate(newBirthdate) {
        return this.#birthdate = newBirthdate
    }

    getName(){
        return this.#name 
    }
    getEmail(){
        return this.#email 
    }
    getBirthdate(){
        return this.#birthdate
    }

    setName(newName){
        return this.#name = newName
    }
    setEmail(newEmail){
        return this.#email = newEmail
    }
    setBirthdate(newBirthdate){
        return this.#birthdate = newBirthdate
    }

}




const autoraRaissa = new Author('Raissa', 'raissa@gmail.com', '16/09/1992')
console.log(autoraRaissa);
console.log(autoraRaissa.setName('Raissa Barata Pereira') );
console.log(autoraRaissa.getEmail());
console.log(autoraRaissa.name);