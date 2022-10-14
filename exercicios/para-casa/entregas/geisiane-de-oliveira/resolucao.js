class Author{

    #nameAuthor;
    #email;
    #birthdate;

    constructor(nameAuthor, email, birthdate){
        this.#nameAuthor = nameAuthor;
        this.#email = email;
        this.#birthdate = birthdate;
    }

}

class Book extends Author{

    #nameBook;
    #isbn;
    #price;
    #quantity;

    constructor(nameAuthor, nameBook, isbn, price, quantity){
    super(nameAuthor);
    this.#nameBook = nameBook;
    this.#isbn = isbn;
    this.#price = price;
    this.#quantity = quantity;
    }

    getname(){
        this.#nameBook;
    }

    getISBN(){
        this.#isbn;
    }

    getAuthor(){
        this.nameAuthor;
    }

    getPrice(){
        this.#price;
    }

    setPrice(setPrice){
        this.#price = setPrice;
    }

    getQuantity(){
        this.#quantity;
    }

    setQuantity(setQuantity){
        this.#quantity = setQuantity;
    }

}

const Book1 = new Book("Chimamanda Ngozi Adichie", "Americanah", 8535924736, "R$ 39,45", 1)

console.log(Book1.nameAuthor)