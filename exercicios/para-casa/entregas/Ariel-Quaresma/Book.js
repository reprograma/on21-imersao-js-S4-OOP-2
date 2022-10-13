//-  Escreva também uma classe chamada `Book`, essa classe contém:
//- Quatro variáveis privadas: `name` (String), `isbn` (String), `author` (Author, assuma que o livro só tem um único autor), `price` (double), e `qty` (int);
  
//- Métodos acessores: `getName()`, `getISBN()`, `getAuthor()`, `getPrice()`, `setPrice()`, `getQty()`, `setQty()`
//-  Por fim, escreve uma classe principal que instancie um livro (`Book`), e imprima o nome do autor através da instância de `Book`.

const Author = require ('./Author');

class Book extends Author{

    #nameOfBook;
    #isbn;
    #price;
    #quantity;


    constructor(nameOfAuthor, emailOfAuthor, birthDate, nameOfBook, isbn, price, quantity){

        super(nameOfAuthor, emailOfAuthor, birthDate);

        this.#nameOfBook = nameOfBook;
        this.#isbn = isbn;
        this.#price = price;
        this.#quantity = quantity;
    }

    getNameOfBook(){
        return this.#nameOfBook;
    }

    setNameOfBook(newNameOfBook){
        this.#nameOfBook = newNameOfBook;
    }

    getIsbn(){
        return this.#isbn;
    }

    setIsbn(newIsbn){
        this.#isbn = newIsbn;
    }

    getPrice(){
        return this.#price;
    }

    setPrice(){
        return this.#nameOfBook;
    }

    getQuantity(){
        return this.#quantity;
    }

    setQuantity(newQuantity){
        this.#quantity = newQuantity;
    }
}

const AsCronicasDeGeloEFogo = new Book("George R. R. Martin", "daenerys@dracarys.com", "20/07/1948", "As Crônicas de Gelo e Fogo", 457, "R$ 47,50", 2);
console.log(AsCronicasDeGeloEFogo.name);
