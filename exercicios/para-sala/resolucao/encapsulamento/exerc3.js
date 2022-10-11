/* Crie uma classe chamada Author que extendera de User as informações de email e password e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post que incrementará a quantidade de post e 
o outro obter o número de post criados. 

Observação: Não criaremos a implementação da adição do post; */

import User from "./exercise2ByJess.js";

class Author extends User {
    #_numberOfPosts; 
    constructor(email, password) { // herdo informações de uma classe com o objetivo de usar essas informações
        super(email, password); // pesquisa as propriedades que foram herdadas e serão usadas nessa situação
        this._numberOfPosts = 0;
    }



}