const Author = require("./Author");

class Book extends Author{
    #nameAuthor
    #isbn
    #price
    #qty
    constructor(nameAuthor, nameBook, isbn, price, qty){
        super(nameAuthor)
        this.#nameAuthor = nameAuthor
        this.nameBook = nameBook
        this.#isbn = isbn
        this.#price = price
        this.#qty = qty
    }
    getNameAuthor(){
        return `O nome do autor desse livro é ${this.#nameAuthor}`
    }
    
    getISBN(){
        return `O código ISBN desse livro é ${this.#isbn}`
    }
    
    getnameBook(){
        return `O nome desse livro é ${this.nameBook}`
    }
    
    getPrice(){
        return `O preço desse livro é ${this.#price}`
    }
    
    getQty(){
        return `Temos em estoque ${this.#qty}`
    }
    
    setQty()
}

