class AuthorExample {
   
    constructor(name, email, birthday){
        this.name = name;
        this.email = email;
        this.birthday = birthday;

    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getBirthday(){
        return this.birthday;
    }

    setName(name){
        this.name = name
    }

    setEmail(email){
        this.email = email;
    }

    setBirthday(birthday){
        this.birthday = birthday;
    }
}

module.exports = AuthorExample;