/* Herança

Crie uma classe chamada Author que extenderá de User as informações de nome e terá um atributo privado com o número de post inicializando com 0. 
Essa classe terá dos metódos, um para criar o post e o outro obter o número de post criados. 
Observação: Criaremos a implementação da adição do post e da QUANTIDADE DE POST; */

const User = require('./exercicio2')

class Author extends User{
    #numPost;
    post;

    constructor(name){
        super(name)
        this.#numPost = 0;
        this.post = [];
    }
        
    createPost(post){
        this.post.push(post);
        this.#numPost ++;
    }    
    
    get qtdPost(){
        return `Você possui: ${this.#numPost} post(s) criados\n ${this.post}`
    }
}

let autor1 = new Author('Maria')
console.log(autor1);
autor1.createPost('Meu primeiro post');
autor1.createPost('Meu segundo post');
autor1.createPost('Meu terceiro post');
autor1.createPost('Meu quarto post');
console.log(autor1.post)
console.log(autor1.qtdPost)