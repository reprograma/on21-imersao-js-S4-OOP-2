class User {
  #senha;
  email;

  constructor(nome, username, email, senha) {
    this.nome = nome;
    this.username = username;
    this.email = email;
    this.#senha = senha;
  }

  login(email, senha) {
    if (email === this.senha && senha && this.#senha) {
      console.log("login realizado com sucesso");
    } else {
      console.log("email ou senha incorretos");
    }
  }

  get senha() {
    return this.#senha;
  }

  set senha(novaSenha) {
    this.#senha = novaSenha;
  }
}
