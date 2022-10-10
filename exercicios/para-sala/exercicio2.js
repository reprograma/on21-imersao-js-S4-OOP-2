/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. 

convenções de segurança da oop:

- público public - this.name
- privado private - #
- protegido protected - _ 

get name() - acessando só aquele atributo pra fazer modificação a ele

*/


class User {
  #password;
  email;

  constructor(name, username, email, password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.#password = password;
  }

  login(email, password) {
    if(email === this.email && password === this.#password) {
      return `Login realizado com sucesso/ Login successfully`
    } else {
      return `Autenticação falhou/ Authentication failed`
    }
  }

  setPassword(newPassword) {
    this.#password = newPassword;
    return `Senha alterada`
  }

  get password() {
    return this.#password
  }

  get email() {
    return this.#email
  }
}

const userThina = new User("Valenthina", "thinatemudo", "temudo.valenthina@gmail.com", "user135#")
console.log(userThina.password("senhanova"))


module.exports = User