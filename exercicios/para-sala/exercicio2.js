/* Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos um novo objeto a partir de User. Precisamos refatorar nosso código. */ 

/* Convenções de segurança da oop:
- publico publico - this.name
- privado private - # (hash) - não pode ser acessado, manipulado ou visualizado
- protegido protected - _ (underline) - visualiza mas não acessa*/

export class User {
    #password // ao declarar o privado precisa colocar o # e propriedade antes do constructor
    email
    constructor(name, username, email, password) {
        this.name = name
        this.username = username
        this.email = email
        this.#password = password
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
        return 'Password changed successful'
    }
    get email(){
        return `Registered email: ${this.email}`
    }
}

// const user1 = new User ('Renata', 'renata', 'renata@email.com', '123456')
// console.log(user1)

// const result = user1.login('renata@email.com', '123456')
// console.log(result);
// console.log('-----------------------');
// user1.password = '654321'
// console.log('After password change: ', user1.password)
// console.log('-----------------------');
// console.log(user1.email)