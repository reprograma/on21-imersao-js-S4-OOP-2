class User {
  email;
  nome;
  #senha;

  constructor() {}

  cadastro(nome, email, senha) {
    let validacao = false;
    validacao = this.#validacaoEmail(email);
    validacao = this.#validacaoSenha(senha);

    if (validacao) {
      this.name = nome;
      this.email = email;
      this.#senha = senha;
      console.log("Usuário criado com sucesso");
    } else {
      console.log("A conta nao foi criada. verificar as informacoes inseridas");
    }
  }

  #validacaoSenha() {
    return true;
  }

  #validacaoEmail(email) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (regex.test(email)) {
      console.log("email cadastrado com sucesso");
      return true;
    } else {
      console.log("Por favor verifique seu email");
    }
  }
}


const creatAnna = new User();
console.log(creatAnna.cadastro("no@gmail.com", "email", "senha"));
