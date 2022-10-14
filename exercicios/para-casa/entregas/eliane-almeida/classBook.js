import { Author } from './classAuthor.js'

export class Book extends Author {
    #nameBook;
    #isbn;
    #price;
    #qty;

    constructor(nameAuthor, nameBook, isbn, price, qty) {
        super(nameAuthor)

        this.#nameBook = nameBook;
        this.#isbn = isbn;
        this.price = price;
        this.#qty = qty;
    }

    get nameBook() {
        return this.#nameBook 
    }

    nameAuthor() {
        return this._nameAuthor
    }

    set nameBook(newNameBook) {
        this.#nameBook = newNameBook
    }

    get isbn() {
        return this.#isbn
    }

    set isbn(newIsbn) {
        this.#isbn = newIsbn
    }

    get price() {
        return this.#price
    }

    set price(newPrice) {
        this.#price = newPrice
    }

    get qty() {
        return this.#qty
    }

    set qty(newQty) {
        this.#qty = newQty
    }

}