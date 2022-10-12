/* Crie uma classe chamada Author que extenderá de User as informações de nome e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post e 
o outro obter o número de post criados. 

Observação: Criaremos a implementação da adição do post e da QUANTIDADE DE POST; */



const User = require('../exercicios/exercicio02')

class Author extends User {
    #numeroPosts;


    constructor(nome, post){
        super(nome, post)

        this.#numeroPosts = numeroPosts = 0;
    
    }

    isLogged(){

    }

    createPost(nome, post){
        this.nome = nome
        this.post = post
       return this.#numeroPosts++;

    }

    get numeroPosts(){
        this.#numeroPosts
    }


}


const newPost = new Author('gabi@gmail.com', 'Senha0123456', 2)
console.log(newPost)


///

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
  
  const author = new Author('any_email@mail.com', '123456')
  
  author.createPost('First Post')
  // ------------------------------------------------------
  author.postQtd // 1 post(s) created.
  author.postsList // Author posts: First Post 
  // ------------------------------------------------------
  author.createPost('Second Post')
  // ------------------------------------------------------
  author.postQtd // 2 post(s) created.
  author.postsList // Author posts: First Post,Second Post
  