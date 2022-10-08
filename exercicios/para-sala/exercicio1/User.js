/*Crie uma classe chamada User com os atributos:
- nome;
- username;
- email;
- senha;

Crie os seguintes metódos com as suas regras:

- login: para logar precisa do email e senha e verificar se o email e senha estão corretos, 
se estiverem, retornar uma mensagem de login realizado, senão, falha no login;
- alterar senha: possibilidade de trocar a senha atual por uma senha nova.
*/

module.exports = class User {
  constructor(nome, username, email, senha) {
    this.nome = nome;
    this.username = username;
    this.email = email;
    this.senha = senha;
  }

  setSenha(senha) {
    this.senha = senha;
  }

  login(email, senha) {
    if (email === this.email && senha === this.senha) return "Login realizado!";

    return "Falha no login!";
  }

  alteraSenha(senhaAtual, senhaNova) {
    if (senhaAtual === this.senha) {
      this.setSenha(senhaNova);
      return "Senha alterada!";
    }

    return "Falha na alteração!";
  }
};
