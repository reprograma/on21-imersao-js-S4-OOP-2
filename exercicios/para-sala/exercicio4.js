/* Crie uma classe chamada Author que extenderá de User as informações de nome e terá um atributo privado com o número de post inicializando com 0. Essa classe terá dos metódos, um para criar o post e o outro obter o número de post criados. Observação: Criaremos a implementação da adição do post e da QUANTIDADE DE POST; */

class User {
  #password;
  email;
  constructor(name, userName, email, password) {
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.#password = password;
  }
  login(email, password) {
    if (email === this.email && password === this.#password) {
      return `Login realizado com sucesso/Login successfully`;
    } else {
      return `Autenticação falhou / Authentication failed`;
    }
  }
  get password() {
    return this.#password;
  }
  set password(newPassword) {
    this.#password = newPassword;
  }
}


// codigo da mari

class Author extends User {
  postsList;
  #postsQtd;

  constructor(email, password) {
    super(email, password);

    this.#postsQtd = 0;
    this.postsList = [];
  }

  createPost(post) {
    this.postsList.push(post);
    this.#postsQtd++;
  }

  get postQtd() {
    return `${this.#postsQtd} post(s) created.`;
  }

  get postsList() {
    return `Author posts: ${this.postsList} `;
  }
}

const author = new Author("any_email@mail.com", "123456");

author.createPost("First Post");
// ------------------------------------------------------
author.postQtd; // 1 post(s) created.
author.postsList; // Author posts: First Post
// ------------------------------------------------------
author.createPost("Second Post");
// ------------------------------------------------------
author.postQtd; // 2 post(s) created.
author.postsList; // Author posts: First Post,Second Post
