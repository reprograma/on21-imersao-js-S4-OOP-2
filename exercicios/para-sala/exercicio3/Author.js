/* Crie uma classe chamada Author que extenderá de User as informações de email e password e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dois metódos, um para criar o post que incrementará a quantidade de post e 
o outro obter o número de post criados. 

Observação: Não criaremos a implementação da adição do post; */

const User = require("./User");

module.exports = class Author extends User {
  #posts;

  constructor(email, senha) {
    super(email, senha);
    this.#posts = 0;
  }

  createPosts(qtd) {
    return (this.#posts += qtd);
  }

  get posts() {
    return this.#posts;
  }
};
