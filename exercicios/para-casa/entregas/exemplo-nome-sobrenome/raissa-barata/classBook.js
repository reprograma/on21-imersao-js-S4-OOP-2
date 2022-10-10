class Book {
    #name
    #isbn
    #author
    #price
    #qtty
    constructor(name,isbn, author, price, qtty){
        this.#name = name
        this.#isbn = isbn
        this.#author = author
        this.#price = price
        this.#qtty = qtty
    }

    get name(){ return this.#name }
    get isbn(){ return this.#isbn }
    get author(){ return this.#author }
    get price(){ return this.#price }
    get qtty(){ return this.#qtty }

    set name(newName){ return this.#name = newName }
    set isbn(newIsbn){ return this.#isbn = newIsbn }
    set author(newAuthor){ return this.#author = newAuthor }
    set price(newPrice){ return this.#price = newPrice}
    set qtty(newQtty){ return this.#qtty = newQtty }


}

const newBook = new Book('as formigas', '12312313', 'EU', 1000, 5 )
console.log(newBook);
console.log(newBook.name);