/* Crie uma classe chamada Author que entenderá de User as 
informações de email e password e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos métodos, um para criar o post 
que incrementará a quantidade de post e 
o outro obter o número de post criados. 

Observação: Não criaremos a implementação da adição do post; */
const User = require('./UserRef.js');

class Author extends User{
    #post;
    constructor(email, senha)
    {
        super(email,senha)
        this.#post = 0;
    }
    
    criarPost(){
        this.#post ++;
    }

    quantidadePost(){

        return `A quantidade de post é ${this.#post}`
    }
}

const Autor = new Author('anna@gmail.com', '12345', 0)

console.log(Autor)

//console.log(Autor.Login('anna@gmail.com', '12345'))

console.log (Autor.criarPost())


console.log (Autor.quantidadePost())
console.log (Autor.criarPost())
console.log (Autor.criarPost())
console.log (Autor.criarPost())
console.log (Autor.criarPost())

console.log (Autor.quantidadePost())
