module.exports = class Author {
    _name;
    #email;
    #birthdate;
  
    constructor(name, email, birthdate) {
      this._name = name;
      this.#email = email;
      this.#birthdate = birthdate;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      return (this._name = newName);
    }
  
    get email() {
      return this.#email;
    }
  
    set email(newEmail) {
      return (this.#email = newEmail);
    }
  
    get birthdate() {
      return this.#birthdate;
    }
  
    set birthdate(newBirthdate) {
      return (this.#birthdate = newBirthdate);
    }
  };