/**
 * class Book extends Author{ constructor(nameAuthor, nameBook, isbn, price, qty){ super(name) this.nameBook = nameBook; this.isbn = isbn; this.price = price; this.qty = qty; } }

- Métodos acessores: `getName()`, `getISBN()`, `getAuthor()`, `getPrice()`, `setPrice()`, `getQty()`, `setQty()`
-  Por fim, escreve uma classe principal que instancie um livro (`Book`), e imprima o nome do autor através da instância de `Book`.
-
 */
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

const newBook = new Book('Era uma vez..', '1234', 'Antonio', '100,00', '1');
console.log(newBook);
console.log(`nome do autor: ${newBook.nameAuthor}`);
console.log(`nome do livro: ${newBook.getNameLivro()}`);
console.log(newBook.setPrice = '90.99');


