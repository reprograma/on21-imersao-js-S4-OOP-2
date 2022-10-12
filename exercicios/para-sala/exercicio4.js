/* Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos um novo objeto a partir de User. Precisamos refatorar nosso código. */ 

/* Convenções de segurança da oop:
- publico publico - this.name
- privado private - # (hash) - não pode ser acessado, manipulado ou visualizado
- protegido protected - _ (underline) - visualiza mas não acessa*/

//criar signup() - criacao de nova conta
// criar login() = acessar conta
// criar um metodo que valida o email ao criar uma conta(dentro metodo signup())
export class User {
    email
    name
    #password // ao declarar o privado precisa colocar o # e propriedade antes do constructor
    // constructor(name, username, email, password) {
    //     this.name = name
    //     this.username = username
    //     this.email = email
    //     this.#password = password
    // }
    constructor(){}

    signUp(name, email, password){
        let isValidate = false;
        isValidate = this.#validateEmail(email)
        isValidate = this.#validatePassword(password)

        if(isValidate){
            this.name = name
            this.email = email
            this.#password = password
            return `User created`
        } else {
            return `Account is not created, please verify your informations`
        }
    }

    #validatePassword(password){
        return true
    }

    #validateEmail(email) {
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
        if(regex.test(email)) {
            return true
        }else {
            return 'Incorrect email'
        }
    }

    login(email, password){
        if(email !== this.email || password !== this.#password) {
            return `Invalid email or password, please check and try again`
        } else {
            return `Login successfully`
        }
    }
    
    get password() {
       return this.#password
    }
    
    set password(newPassword) {
        this.#password = newPassword
        return 'Password changed successfully'
    }
}


class Admin extends User {
  constructor(email, password){
    super(email, password)
  }
  login(email, password){
    let isAdmin = true
    if(email === this.email && password === this.password && isAdmin) {
      return `Admin Login successfully`
    } else {
      return `Invalid email or password, authentication failed. Please check and try again.`
    }
  }
}
// const newAuthor = new Author()
// console.log(newAuthor.signUp('mari', 'any_mail@mail.com', 'any_password'))
// /*
// Validated Email.
// Account created successfully.
//  */
// console.log(newAuthor.login('any_mail@mail.com', 'any_password')) // Login successfully
//--------------------------------------------------------------------------------------
const newAdmin = new Admin()
console.log(newAdmin.signUp('mari','any_mail@mail.com', 'any_password'))
/*
Validated Email.
Account created successfully.
 */
console.log(newAdmin.login('any_mail@mail.com', 'any_password'))
// Admin Login successfully

// const user1 = new User()

// console.log(user1.signUp('Renata', 're', 'renataemail.com', '123456'))

// const result = user1.login('renata@email.com', '123456')
// console.log(result);
// console.log('-----------------------');
// user1.password = '654321'
// console.log('After password change: ', user1.password)
// console.log('-----------------------');
// console.log(user1.email)