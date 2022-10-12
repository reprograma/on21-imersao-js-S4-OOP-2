/* Crie uma classe chamada Author que extenderá de User as informações de email e password e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post e 
o outro obter o número de post criados. 

Observação: Criaremos a implementação da adição do post e da QUANTIDADE DO POST; */

import User from '../para-sala/resolucao/encapsulamento/exercise2ByJess'

class Author extends User {

    postsList
    #postsQtd
  
    constructor(email, password) {
      super(email, password)
  
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
  
  const author = new Author('line@gmail', '163003456')
  
  author.createPost('First Post')

  author.postQtd 
  author.postsList  

  author.createPost('Second Post')

  author.postQtd 
  author.postsList 


module.export = Author