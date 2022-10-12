/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. 
- public (this.name)
- private (#) => passam a ser acessíveis somente com os metodos get/set
- protected (_)
*/

module.exports = class User {
  #senha;
  email;

  constructor(nome, username, email, senha) {
    this.nome = nome;
    this.username = username;
    this.email = email;
    this.#senha = senha;
  }

  get senha() {
    return `A senha é ${this.#senha}`;
  }

  set senha(senha) {
    this.#senha = senha;
  }

  get email() {
    return this.email;
  }

  login(email, senha) {
    if (email === this.email && senha === this.#senha)
      return "Login realizado!";

    return "Falha no login!";
  }

  alteraSenha(senhaAtual, senhaNova) {
    if (senhaAtual === this.#senha) {
      this.#senha = senhaNova;
      return "Senha alterada!";
    }

    return "Falha na alteração!";
  }
};
