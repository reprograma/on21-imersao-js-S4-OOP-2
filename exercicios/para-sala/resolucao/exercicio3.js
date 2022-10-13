/* Crie uma classe chamada Author que extenderá de User as informações de email e password e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post que incrementará a quantidade de post e 
o outro obter o número de post criados. 

Observação: Criaremos a implementação da adição do post; */

// Herança
const User = require("./exercicio2.js");

class Author extends User {
  #numberPost;
  constructor(name, password) {
    super(name, password);
    this.#numberPost = 0;
    this.post = [];
  }

  addPost() {
    this.#numberPost++;
  }

  getPost() {
    return this.#numberPost;
  }

  createPost(description) {
    return this.post.push({ name: this.name, description });
  }

  getCreatePost() {
    return this.post;
  }
}

const newAuthor = new Author("Maria", "maria@gmail.com");
newAuthor.createPost("teste");
const teste = newAuthor.getCreatePost();
console.log(teste);
