export class Author{
    constructor(nameAuthor, email, birthdate){
        this.nameAuthor = nameAuthor
        this.email = email
        this.birthdate = birthdate
    }
    set nameAuthor(newNameAuthor){
        this.nameAuthor = newNameAuthor
        return this.nameAuthor
    }
    set email(newEmail){
        this.email = newEmail
        return this.email
    }
    set birthdate(newBirthdate){
        this.birthdate = newBirthdate
        return this.newBirthdate
    }
    get  nameAuthor(){
        return this.nameAuthor
    }
    get  email(){
        return this.email
    }
    get  birthdate(){
        return this.birthdate
    }
}

const carolAuthor = new Author ('Caroline', 'caroline@gmail.com','08/28/1986')
console.log(carolAuthor)

