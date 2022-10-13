const AuthorExample = require ('./AuthorExample');


class Book extends AuthorExample {

    constructor(bookName, isbn, price, qtty, name){
        super( name ) 
        this.bookName = bookName
        this.isbn = isbn
        this.price = price
        this.qtty = qtty
    }

    getNameBook(){
        return this.bookName;
    }

    getIsbn(){
        return this.isbn;
    }

    getPrice(){
        return this.price;
    }

    getQtty(){
        return this.qtty;
    }

    setNameBook(nameBook){
        this.bookName = nameBook;
    }

    setIsbn(isbn){
        this.isbn = isbn;
    }

    setPrice(price){
        this.price = price;
    }

    setQuantity(quantity){
        this.qtty = quantity;
    }
}


const createBook = new Book ("O nome da Rosa", 9780307, 39.90, 1, "Umberto Eco")


console.log("Nome do autor do livro: ", createBook.getName())


