/* Crie uma classe chamada Author que extenderá de User as informações de email e password e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post que incrementará a quantidade de post e 
o outro obter o número de post criados. 

Observação: Não criaremos a implementação da adição do post; */

import { User } from '../encapsulamentoEx2/classUser.js'

export class Author extends User {
    #numPost

    constructor(email, password) {
        super(email, password)

        this.#numpost = 0;

    }

    isLogged(){
        //...
    }

    createPost(post) {
        this.#numPost++;
    }

    get numPost() {
        return this.createPost()
    }
}