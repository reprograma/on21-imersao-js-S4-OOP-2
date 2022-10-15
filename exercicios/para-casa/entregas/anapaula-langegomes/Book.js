const Author = require('./Author')

class Book extends Author{

    constructor(nameBook, isbn, nameAuthor, price, qty){
        super(nameAuthor);
        this.nameBook = nameBook;
        this.isbn - isbn;
        this.price = price;
        this.qty = qty;
    }

    getNameLivro(){
        return this.nameBook;
    }

    getISB(){
        return this.isbn;
    }

    getPrice(){
        return this.price;
    }

    setPrice(value){
        return this.price = value;
    }

    getQty(){
        return this.qty;
    }

    setQty(qtd){
        return this.qty = qtd;
    }
}

const novoLivro = new Book('Os segredos da mente milionária', '5698734787124', '39.90', 76, 'T. Harv Eker' )
console.log(novoLivro)
console.log(novoLivro.author)
console.log(novoLivro.nameBook)
console.log(novoLivro.isbn)
console.log(novoLivro.qty)