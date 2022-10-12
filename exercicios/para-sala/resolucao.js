const User = require('./UserRef.js');

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
  
  console.log(author)
  console.log(author.postQtd)