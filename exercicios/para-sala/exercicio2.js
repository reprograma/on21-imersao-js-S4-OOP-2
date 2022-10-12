/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. */

class User {
  #senha;
  _nome;
  constructor(nome, userName, email, senha) {
    this._nome = nome; //protegido
    this.userName = userName;
    this.email = email;
    this.#senha = senha; // privado
  }

  login(email, senha) {
    if (this.email === email && this.#senha === senha) {
      return `Login realizado com sucesso!`;
    } else {
      return `Falha na autenticação, email ou senha não confere!`;
    }
  }

  get senha(){
    return this.#senha
  }

  set senha(novaSenha) {
    this.#senha = novaSenha;
    return `Senha alterada com sucesso!`;
  }
  
}
const usuario = new User("anna", "userName", "anna@gmail.com", "1234");
console.log(usuario.login("anna@gmail.com", "123"));
console.log(usuario.senha = "abc" );


