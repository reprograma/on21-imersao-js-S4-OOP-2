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
    if (this.email === email && this.password === password) {
      return "Login realizado";
    } else {
      return "Falha no login";
    }
  }

  setPassword(newPassword) {
    this.password = newPassword;
    return `Senha alterada`;
  }

  getEmail() {
    return `o seu email cadastrado é ${this.email}`;
  }
}

const newUser = new User("Maria", "maria02", "mariasousa@gmail", "123");

console.log(newUser.login("mariasousa@gmail", "123"));
