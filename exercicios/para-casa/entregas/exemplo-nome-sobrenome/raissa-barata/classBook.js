const Author  = require('./classAuthor')

class Book extends Author {
    #bookName
    #isbn
    #author
    #price
    #qtty
    constructor(bookName, isbn, author, price, qtty, name){
        super( name ) // super(name, undefined, undefined)
        this.#bookName = bookName
        this.#isbn = isbn
        this.#author = author
        this.#price = price
        this.#qtty = qtty
    }

    get nameAuthor(){
        return this.#author
    }
    get bookName(){ return this.#bookName }
    get isbn(){ return this.#isbn }
    get author(){ return this.#author }
    get price(){ return this.#price }
    get qtty(){ return this.#qtty }

    set bookName(newName){ return this.#bookName = newName }
    set isbn(newIsbn){ return this.#isbn = newIsbn }
    set author(newAuthor){ return this.#author = newAuthor }
    set price(newPrice){ return this.#price = newPrice}
    set qtty(newQtty){ return this.#qtty = newQtty }
}

const newBook = new Book('as formigas', '12312313', 'EU', 1000, 5, 'Euzinha' )
console.log("1", newBook);
console.log("2", newBook.bookName);
console.log("3", newBook.name);
console.log("4", newBook.email);
console.log("5", newBook.birthdate);