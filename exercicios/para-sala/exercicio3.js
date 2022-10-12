import { User } from './exercicio2.js';
/*  Crie uma classe chamada Author que extenderá de User as informações de nome e terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post e o outro obter o número de post criados. 

Observação: Criaremos a implementação da adição do post e da QUANTIDADE DE POST; */

class Author extends User {
    #numPost
    constructor(name, username, email) {
        super(name, username, email)
        
    this.#numPost = 0
    this.post = []
    }

 
    get numPost() {        
        return this.#numPost
    }

    createPost(post){
        this.post.push(post)
        this.#numPost++
    }

 }

 const author1 = new Author('Joana', 'Jo', 'email@email.com', '123')
 
 console.log(author1);

author1.createPost('post');
author1.createPost('post 2');

 console.log('Post quantity: ', author1.numPost)

 console.log(author1);

