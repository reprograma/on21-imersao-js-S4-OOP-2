/*Explicação do exercício: 
  
    -  Escreva também uma classe chamada `Book`, essa classe contém:
    - Quatro variáveis privadas: `name` (String), `isbn` (String), `author` (Author, assuma que o livro só tem um único autor), `price` (double), e `qty` (int);
  
    - Métodos acessores: `getName()`, `getISBN()`, `getAuthor()`, `getPrice()`, `setPrice()`, `getQty()`, `setQty()`
    -  Por fim, escreve uma classe principal que instancie um livro (`Book`), e imprima o nome do autor através da instância de `Book`.
    - 
*/

export class Book {
    #name;
    #isbn;
    #author;
    #price;
    #qty;

    constructor(name, isbn, author, price, qty){
        this.#name = name;
        this.#isbn = isbn;
        this.#author = author;
        this.#price = price;
        this.#qty = qty;
    }

    get name(){
        return this.#name
    };

    get isbn(){
        return this.#isbn
    };

    get author(){
        return this.#author
    };

    get price(){
        return this.#price
    };

    get qty(){
        return this.#qty
    };

    set name(changeName){
        return this.#name = changeName
    };

    set isbn(changeIsbn){
        return this.#isbn = changeIsbn
    };

    set author(changeAuthor){
        return this.#author = changeAuthor
    };

    set price(changePrice){
        return this.#price = changePrice
    };

    set qty(changeQty){
        return this.#qty = changeQty
    }
}