/* Crie uma classe chamada Author que extenderá de User as informações de email e password 
e terá um atributo privado com o número de post inicializando com 0. Essa classe terá dois metódos, 
um para criar o post que incrementará a quantidade de post e o outro obter o número de post criados. 
Observação: Não criaremos a implementação da adição do post; */ 

const User = require('./exercise02')

class Author extends User {

  postsList
  #postsQtd

  constructor( email, password, name, username,) {
    super( email, password, name, username,)

    this.#postsQtd = 0
    this.postsList = []
  }

  createPost(post){
    this.postsList.push(post)
    this.#postsQtd++    
  }

  get postQtd(){
    return `${this.#postsQtd} post(s) created.` 
  }

  get postsList(){
    return `Author posts: ${this.postsList} `
  }

}

const author = new Author('Mariana', 'any_nick', 'any_email@mail.com', 'any_password')

author.createPost('First Post')
// ------------------------------------------------------
author.postQtd// 1 post(s) created.
author.postsList // Author posts: First Post 
// ------------------------------------------------------
author.createPost('Second Post')
// ------------------------------------------------------
author.postQtd // 2 post(s) created.
author.postsList // Author posts: First Post,Second Post 

author

/*
Author {
  name: 'Mariana',
  username: 'any_nick',
  email: 'any_email@mail.com',
  postsList: [ 'First Post', 'Second Post' ]
}
*/