class Author {
    #nameAuthor;
    #emailAuthor;
    #birthdayAuthor;

    constructor(nameAuthor, emailAuthor, birthdayAuthor) {
        this.#nameAuthor = nameAuthor;
        this.#emailAuthor = emailAuthor;
        this.#birthdayAuthor = birthdayAuthor;
    }

    get nameAuthor() {
        return this.#nameAuthor;
    }

    set nameAuthor(nameAuthor) {
        this.#nameAuthor = nameAuthor;
    }

    get emailAuthor() {
        return this.#emailAuthor;
    }

    set emailAuthor(emailAuthor) {
        this.#emailAuthor = emailAuthor;
    }

    get birthdayAuthor() {
        return this.#birthdayAuthor;
    }

    set birthdayAuthor(birthdayAuthor) {
        this.#birthdayAuthor = birthdayAuthor;
    }
}


class Book {
    #title;
    #author;
    #isbn;
    #price;
    #quantity;

    constructor(title, author, isbn, price, quantity) {
        this.#title = title;
        this.#author = author;
        this.#isbn = isbn;
        this.#price = price;
        this.#quantity = quantity;
    }

    get title() {
        return this.#title;
    }

    set title(newTitle) {
        this.#title = newTitle;
    }

    get author() {
        return this.#author;
    }

    set author(newAuthor) {
        this.#author = newAuthor;
    }

    get isbn() {
        return this.#isbn;
    }

    set isbn(newIsbn) {
        this.#isbn = newIsbn;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        this.#price = newPrice;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(newQuantity) {
        this.#quantity = newQuantity;
    }
}

const createAuthor = new Author('Aline Viana', 'aline@mail.com', '1990-10-10');
const createBook = new Book('O Senhor dos Anéis', createAuthor, '123456789', 50, 10);

console.log(createBook.title);
console.log(createBook.author.nameAuthor);
console.log(createBook.isbn);
console.log(createBook.price);
console.log(createBook.quantity);

console.log(createBook.title = 'O Hobbit');

console.log(createAuthor.emailAuthor);
console.log(createAuthor.birthdayAuthor);