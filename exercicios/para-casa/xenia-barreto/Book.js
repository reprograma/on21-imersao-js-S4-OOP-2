/*Explicação do exercício: 
  
    -  Escreva também uma classe chamada `Book`, essa classe contém:
    - Quatro variáveis privadas: `name` (String), `isbn` (String), `author` (Author, assuma que o livro só tem um único autor), `price` (double), e `qty` (int);
  
    - Métodos acessores: `getName()`, `getISBN()`, `getAuthor()`, `getPrice()`, `setPrice()`, `getQty()`, `setQty()`
    -  Por fim, escreve uma classe principal que instancie um livro (`Book`), e imprima o nome do autor através da instância de `Book`.
    - 
*/

import { Author } from "./Author.js";

export class Book extends Author{
    #name;
    #nameBook;
    #isbn;
    #price;
    #qty;

    constructor(name, nameBook, isbn, price, qty){
        super(name)
        this.#nameBook = nameBook
        this.#isbn = isbn;
        this.#price = price;
        this.#qty = qty;
    }

    getNameBook(){
        return this.#nameBook
    };

    getIsbn(){
        return this.#isbn
    };

    getPrice(){
        return this.#price
    };

    getQty(){
        return this.#qty
    };

    setNameBook(changeName){
        return this.#nameBook = changeName
    };

    setIsbn(changeIsbn){
        return this.#isbn = changeIsbn
    };

    setPrice(changePrice){
        return this.#price = changePrice
    };

    setQty(changeQty){
        return this.#qty = changeQty
    }

}