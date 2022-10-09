class Author {

  #name
  #email
  #birthdate

  constructor(name, email, birthdate) {
    this.#name = name
    this.#email = email
    this.#birthdate = birthdate
  }

  get name(){
    return this.#name
  }

  get email(){
    return this.#email
  }

  get birth_date(){
    return this.#birthdate
  }

  set name(newName){
    this.#name = newName
    return this.#name
  }

  set email(newEmail){
    this.#email = newEmail
    return this.#email
  }
  
  set birthdate(newBirthDate){
    this.#birthdate = newBirthDate
    return this.#birthdate
  }
}

module.exports = Author
