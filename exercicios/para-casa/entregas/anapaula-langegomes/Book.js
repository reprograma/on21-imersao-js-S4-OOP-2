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

}