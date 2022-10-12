class Author{
    #name;
    #email;
    #birthdate;
    constructor(name,email,birthdate){
        this.#name = name;
        this.#email = email;
        this.#birthdate = birthdate;
    }
    get name(){return this.#name;}

    set name(name){
        return this.#name =name;
    }
    get email(){return this.#email}
    set email(email){return this.#email=email;}
    get birthdate(){return this.#birthdate}
    set birthdate(birthdate) {return this.#birthdate=birthdate}

    getName(){return `O Nome do Author é ${this.#name}`}
    getEmail(){return `O email é ${this.#email}`}
    getbirthdate(){return `A data de aniversário é ${this.#birthdate}`}

    setName(name){
        this.#name = name;
        return `O novo nome do Author é ${this.#name}`}

    setEmail(email){
        this.#email = email;
        return `O novo email é ${this.#email}`}
        
    setbirthdate(birthdate){
        this.#birthdate = birthdate;
        return `A nova data de aniversário é ${this.#birthdate}`}
    
}
module.exports = Author;

 const Autor = new Author('Anna Maria Rodrigues', 'anna@gmail.com', '13/07/1982') ;

console.log(Autor.birthdate)
console.log(Autor.name)
console.log(Autor.name='Antonia')
console.log(Autor.setName('Anna Maria'))
