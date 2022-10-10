/*Crie uma classe chamada User com os atributos:
- nome;
- username;
- email;
- senha;

Crie os seguintes metódos com as suas regras:

- login: para logar precisa do email e senha e verificar se o email e senha estão corretos, se estiverem, retornar uma mensagem de login realizado,
senão, falha no login;
- alterar senha: possibilidade de trocar a senha atual por uma senha nova.
*/

class User {
  constructor(name, username, email, password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if(email === this.email && password === this.password) {
      return `Login realizado com sucesso/ Login successfully`
    } else {
      return `Autenticação falhou/ Authentication failed`
    }
  }

  setPassword(newPassword) {
    this.password = newPassword;

    return `Senha aterada`
  }

  getEmail() {
    return `o seu email cadastrado é ${this.email}`
  }
}

const userThina = new User("Valenthina", "thinatemudo", "temudo.valenthina@gmail.com", "user135#")
console.log(userThina);

console.log(userThina.login("temudo.valenthina@gmail.com", "user135#"))
console.log(userThina.setPassword("senhanova"))

console.log(userThina);