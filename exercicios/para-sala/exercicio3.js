import { User } from './exercicio2.js';
/* Crie uma classe chamada Author que extenderá de User as informações de email e password e terá um atributo privado com o número de post inicializando com 0. Essa classe terá dois metódos, um para criar o post que incrementará a quantidade de post e o outro obter o número de post criados. Observação: Não criaremos a implementação da adição do post; */

class Author extends User {
    #postNumber
    constructor(name, username, email, password) {
        super(name, username, email, password)
        
    this.#postNumber = 0
    }
    set postNumber(postNumber) {        
        return this.#postNumber += postNumber 
    }

    get postNumber(){
        return this.#postNumber
    }
 }

//  const author1 = new Author('Joana', 'Jo', 'email@email.com', '123')
 
//  console.log(author1);
//  author1.postNumber = 2
//  author1.postNumber = 1

// console.log(`Author's posts: ${author1.postNumber}`)



