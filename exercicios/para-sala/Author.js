/* Crie uma classe chamada Author que extenderá de User as informações de nome e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post e 
o outro obter o número de post criados. 

Observação: Criaremos a implementação da adição do post e da QUANTIDADE DE POST; */
const User = require('./UserRef.js');

class Author extends User{
    #post;
    constructor(nome)
    {
        super(nome)
        this.#post = 0;
    
    }
    
    criarPost(){
        this.#post ++;
    }

    quantidadePost(){

        return `A quantidade de post é ${this.#post}`
    }
}

const Autor = new Author('Anna Maria' )

console.log(Autor)

//console.log(Autor.Login('anna@gmail.com', '12345'))

console.log (Autor.criarPost())


console.log (Autor.quantidadePost())
console.log (Autor.criarPost())
console.log (Autor.criarPost())
console.log (Autor.criarPost())
console.log (Autor.criarPost())

console.log (Autor.quantidadePost())
