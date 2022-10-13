/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. 
-public - this.name;
-private -#;
-protecte -_;*/

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
    if (this.email === email && this.#password === password) {
      return "Login realizado";
    } else {
      return "Falha no login";
    }
  }

  //boas práticas quando usar dados privados. Não é mais como um método e sim acessando diretamente uma propiedade. Get acesso a propiedade, o método retorna uma propiedade.
  get password() {
    return this.#password;
  }

  set password(newPassword) {
    this.#password = newPassword;
    return `Senha alterada`;
  }
}

const newUser = new User("Maria", "maria02", "mariasousa@gmail", "123");

// console.log(newUser.login("mariasousa@gmail", "123"));
// console.log(newUser.password);

module.exports = User;
