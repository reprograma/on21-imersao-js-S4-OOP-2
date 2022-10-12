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
  constructor(nome, userName, email, senha) {
    this.nome = nome;
    this.userName = userName;
    this.email = email;
    this.senha = senha;
  }

  login(email, senha) {
    if (this.email === email && this.senha === senha) {
      return(`Login realizado com sucesso!`) ;
    } else {
      return(`Falha na autenticação, email ou senha não confere!`);
    }
  }
  alterarSenha(novaSenha) {
    this.senha = novaSenha
    return (`Senha alterada com sucesso!`)
  }
}
const usuario = new User("anna", "userName", "anna@gmail.com", "1234");
console.log(usuario.login("anna@gmail.com", "123"));
console.log(usuario.alterarSenha("abc"))
console.log(usuario.senha)

