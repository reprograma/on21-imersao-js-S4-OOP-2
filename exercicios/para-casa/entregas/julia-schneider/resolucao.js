/* Escreva uma classe chamada Author, uma classe que representa um autor de livros.

Essa classe contém:

- Três atributos privados: nameAuthor (String), email (String), e birthdate (Date ou DateTime);
- Um método construtor que inicialize nameAuthor, email e birthdate com os valores passados;
- class Author(nameAuthor, email) {......}

Métodos de acesso público (getter/setter) para cada um dos atributos;

Escreva também uma classe chamada Book, essa classe contém:

Quatro variáveis privadas: 
- nameBook (String), isbn (String), 
- author (Author, assuma que o livro só tem um único autor), 
- price (double), 
- qty (int);

class Book extends Author{ constructor(nameAuthor, nameBook, isbn, price, qty)
{ super(name) this.nameBook = nameBook; this.isbn = isbn; this.price = price; this.qty = qty; } } */



class Author {
    #nameAuthor;
    #emailAuthor;
    #birthdateAuthor;

    constructor(nameAuthor, emailAuthor, birthdateAuthor) {
        this.#nameAuthor = nameAuthor;
        this.#emailAuthor = emailAuthor;
        this.#birthdateAuthor = birthdateAuthor;
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

    get birthdateAuthor() {
        return this.#birthdateAuthor;
    }

    set birthdateAuthor(birthdateAuthor) {
        this.#birthdate = birthdateAuthor;
    }
}

const dadosAuthor = new Author("Jane", "jane@gmail.com", "16/12/1990");



class Book {
    #title;
    #author;
    #isbn;
    #price;
    #qty;

    constructor(title, author, isbn, price, qty) {
        this.#title = title;
        this.#author = author;
        this.#isbn = isbn;
        this.#price = price;
        this.#qty = qty;
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

    get qty() {
        return this.#qty;
    }

    set qty(newQty) {
        this.#qty = newQty;
    }
}

const dadosBook = new Book("Emma", "Jane", 123, 20, 90000);