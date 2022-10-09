/* Dando seguimento ao exercicio 1, o atributo senha não pode ser mais 
retornado quando criamos um novo objeto a partir de user. Precisamos refatorar nosso código */

/* Convenções de segurança da oop:
- publico publico - this.name
- privado private - # (hash) - não pode ser acessado, manipulado ou visualizado
- protegido protected - _ (underline) - visualiza mas não acessa*/

class User {
  
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

  set password(newPassword) {
      this.#password = newPassword
      return 'Password changed successfully'
  }

  get password(){
    return this.#password
  }

  get email(){
      return `Registered email: ${this.email}`
  }
}

const userProfile = new User ('Mariana', 'maritrombini', 'any_email@mail.com', '123456')

/* User {
  name: 'Mariana',
  username: 'maritrombini',
  email: 'any_email@mail.com'
} */

const result = userProfile.login('any_email@mail.com', 'any_password') // Login successfully

userProfile.password = 'new_password'
userProfile.password // new_password
userProfile.email // any_email@mail.com

