import { Author } from './Author.js'

export class Book extends Author {
    #booksName
    #isbn
    #price
    #qty
    constructor(authorsName, booksName, isbn, price, qty) {
        super(authorsName)
        this.#booksName = booksName
        this.#isbn = isbn
        this.#price = price
        this.#qty = qty
    }
    get booksName() {
        return this.#booksName
    }


    get isbn() {
        return this.#isbn
    }

    get price() {
        return this.#price
    }

    set price(newPrice) {
        return this.#price = newPrice
    }

    get qty() {
        return this.#qty
    }

    set qty(newQty) {
        return this.#qty = newQty
    }

    getBooksName(){
        return this.booksName
    }

    getISBN(){
        return this.isbn
    }

    getPrice() {
        return this.price
    }

    setPrice(newPrice) {
        return this.price = newPrice
    }

    getQty() {
        return this.qty
    }

    setQty(qty) {
        return this.qty = qty
    }

    getAuthor() {
        return this.authorsName
    }

    getBooksInfo() {
        return `Book's Title: ${this.booksName} \nAuthor: ${this.authorsName} \nISBN: ${this.isbn} \nPrice: ${this.price} \nQuantity: ${this.qty}`
    }
}
