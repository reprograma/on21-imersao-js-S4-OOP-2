const Author = require('./Author');


class Book extends Author {

    #nameBook;
    #isbn;
    #price;
    #qtd

    constructor(nameBook, isbn, nameAuthor, price, qtd) {

        super(nameAuthor)

        this.#isbn = isbn;
        this.#nameBook = nameBook;
        this.#price = price;
        this.#qtd = qtd;
    }

    get nameBook() {
        return this.nameBook;
    }
    get isbn() {
        return this.#isbn;
    }
    get price() {
        return this.#price;
    }
    set price(valor) {
        this.#price = valor;
    }
    get qty() {
        return this.#qtd;
    }
    set qty(valor) {
        this.#qtd = valor;
    }
}

const livro = new Book("Clean Code", "01/01/1800", "Robert Cecil Martin", "290", "1");
console.log(`Nome author: ${livro.nameAuthor}`);

