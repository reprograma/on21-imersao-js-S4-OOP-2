const Author = require("./Author.js")

class Book extends Author{
    #nameBook
    #isbn
    #price
    #qty

    constructor(nameBook, isbn, price, qty, nameAuthor){
        super(nameAuthor)
        this.#nameBook = nameBook
        this.#isbn = isbn
        this.#price = price
        this.#qty = qty
    }

    get nameBook(){
        return this.#nameBook
    }
    
    set nameBook(newName){
        this.#nameBook = newName
    }

    get price(){
        return this.#price
    }
    
    set price(newPrice){
        this.#price = newPrice
    }

    get qty(){
        return this.#qty
    }
    
    set qty(newQty){
        this.#qty = newQty
    }

    getName(){
       return this.#nameBook
    } 

    getISBN(){
       return this.#isbn
    }

    getAuthor(){
        return this.nameAuthor
    }
    
    getPrice(){
        return this.#price
    }

    setPrice(newPrice){
        this.#price = newPrice
    }

    getQty(){
        return this.#qty
    }

    setQty(newQty){
         this.#qty = newQty
    }
}

module.exports = Book
