const Author = require('./Author')

class Book extends Author{
    #nameBook
    #isbn
    #price
    #qty
    #author

    constructor( nameBook, isbn, price, qty, author, name){
        super(name)
        this.#nameBook = nameBook;
        this.#isbn = isbn;
        this.#price = price;
        this.#qty = qty;
        this.#author = author;
    }

    get author() {
        return this.#author
    }

    get isbn() {
        return this.#isbn
    }

    get price() {
        return this.#price
    }

    get qty() {
        return this.#qty
    }

    get nameBook() {
        return this.#nameBook
    }

    set author(newAuthor) {
        return this.#author = newAuthor
    }

    set qty (newQty) {
        return this.#qty = newQty
    }

    set price(newPrice) {
        return this.#price = newPrice
    }

    set isbn(newIsbn) {
        return this.#isbn = newIsbn
    }

    set nameBook(newNameBook) {
        return this.#nameBook = newNameBook
    }
}

module.exports = Book;

const novoLivro = new Book('Mulheres que correm com os lobos', '4541584815221', '56.80', 89, 'Clarissa Pinkola Estés' )
console.log(novoLivro)
console.log(novoLivro.author)
console.log(novoLivro.nameBook)
console.log(novoLivro.isbn)
console.log(novoLivro.qty)


