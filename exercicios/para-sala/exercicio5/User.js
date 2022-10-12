module.exports = class User {
  email;
  nome;
  #senha;

  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  signUp(nome, email, senha) {
    let isValido = this.#validarEmail(email);

    if (isValido) {
      this.nome = nome;
      this.email = email;
      this.#senha = senha;
      return "Usuário criado!";
    } else return "Email inválido!";
  }

  //método privado
  #validarEmail(email) {
    if (email.includes("@")) {
      return true;
    }
    return false;
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

  get senha() {
    return `A senha é ${this.#senha}`;
  }

  set senha(senha) {
    this.#senha = senha;
  }

  get email() {
    return this.email;
  }
};
