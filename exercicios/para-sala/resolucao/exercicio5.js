// Polimorfismo

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

class Admin extends User {
  constructo(email, password) {
    super(email, password);
  }

  login(email, password) {
    let isAdmin = true;
    if (email === this.email && password === this.password) {
      return `Login realizado com sucesso/Login successfully`;
    } else {
      return `Autenticação falhou / Authentication failed`;
    }
  }
}
