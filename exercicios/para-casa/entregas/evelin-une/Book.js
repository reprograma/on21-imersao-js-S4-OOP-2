import { Author } from "./Author.js";

export class Book extends Author{
    #booksName
    #isbn
    #price
    #qty

    constructor(authorName, booksName, isbn, price, qty){
        super(authorName)
        this.#booksName = booksName;
        this.#isbn = isbn;
        this.#price = price;
        this.#qty = qty;
    }

    getBooksName(){
        return this.#booksName;
    }

    getISBN(){
        return this.#isbn;
    }

    getPrice(){
        return this.#price
    }

    setPrice(newPrice){
        this.#price = newPrice;
    }

    getQty(){
        return this.#qty
    }

    setQty(qty){
        this.#qty += qty; 
    }
}