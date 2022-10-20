/* Crie uma classe chamada Author que extenderá de User as informações de email e password 
e terá um atributo privado com o número de post inicializando com 0. Essa classe terá dois metódos, 
um para criar o post que incrementará a quantidade de post e o outro obter o número de post criados. 
Observação: Não criaremos a implementação da adição do post; */

const User = require('./exercise02')

class Author extends User {
  post
  postsList
  #postsQtd

  constructor(name, username, email, password) {
    super(name, username, email, password)
    this.post
    this.#postsQtd = 0
    this.postsList = []
  }

  createPost(post) {
    this.post = post
    this.postsList.push(post)
    this.#postsQtd++
  }

  get post() {
    return this.post
  }

  set postsList(post) {
    this.post = post
    this.postsList.push(post)
    this.postQtd++
    return this.postsList
  }

  get postQtd() {
    return `${this.#postsQtd} post(s) created.`
  }

  get postsList() {
    return `Author posts: ${this.postsList} `
  }

  set post(post) {
    this.post = post
    this.postsList.push(this.post)
    this.postQtd++
    return this.postsList
  }

}

const author = new Author('Mariana', 'any_nick', 'any_email@mail.com', 'any_password')

author.posts = 'First Post'
// ------------------------------------------------------
author.postQtd// 1 post(s) created.
author.postsList // Author posts: First Post 
author.postQtd // 1 post(s) created.
author.postsList // Author posts: First Post 
// ------------------------------------------------------
author.post = 'Second Post'
// ------------------------------------------------------
author.postsList
author.postQtd // 2 post(s) created.
author.postsList // Author posts: First Post,Second Post 

//author
console.log(author)
/*
Author {
  name: 'Mariana',
  username: 'any_nick',
  email: 'any_email@mail.com',
  postsList: [ 'First Post', 'Second Post' ]
}
*/

module.exports = Author