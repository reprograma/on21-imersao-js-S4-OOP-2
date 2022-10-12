/* Crie uma classe chamada Author que extenderá de User as informações de email e password e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dois metódos, um para criar o post que incrementará a quantidade de post e 
o outro obter o número de post criados. 

Observação: Não criaremos a implementação da adição do post; */

const User = require("../exercicio5/User.js");

module.exports = class Author extends User {
  #posts;

  constructor(email, senha) {
    super(email, senha);
    this.#posts = 0;
  }

  login(email, senha) {
    let isAuthor = true;
    if (email === this.email && senha === this.senha && isAuthor)
      return "Login do author realizado!";

    return "Falha no login do author!";
  }

  createPosts(qtd) {
    return (this.#posts += qtd);
  }

  get posts() {
    return this.#posts;
  }
};
