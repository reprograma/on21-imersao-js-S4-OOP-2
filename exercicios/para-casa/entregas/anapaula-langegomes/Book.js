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
