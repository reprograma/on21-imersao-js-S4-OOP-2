// Explicação do exercício: 

// - Escreva uma classe chamada Author, uma classe que representa um autor de livros.
// -  Essa classe contém:
//     - Três atributos privados: name (String), email (String), e birthdate (Date ou DateTime);
//     - Um método construtor que inicialize name, email e birthdate com os valores passados;

//     class Author(name, email) {......}

//     - Métodos de acesso público (getter/setter) para cada um dos atributos;

//     - Escreva também uma classe chamada Book, essa classe contém:
//     - Quatro variáveis privadas: name (String), isbn (String), author (Author, assuma que o livro só tem um único autor), price (double), e qty (int);

//     - Métodos acessores: getName(), getISBN(), getAuthor(), getPrice(), setPrice(), getQty(), setQty()
//     -  Por fim, escreve uma classe principal que instancie um livro (Book), e imprima o nome do autor através da instância de Book.
//     - 
 
class Author{
    #nameAuthor;
    #email;
    #birthdate;

    constructor(nameAuthor, email, birthdate){
        this.#nameAuthor = nameAuthor;
        this.#email = email;
        this.#birthdate = birthdate;
    }

    get nameAuthor() {
        return this.#nameAuthor;
    }

    get email(){
        return this.#email;
    }

    get birthdate() {
        return this.#birthdate;
    }

    set nameAuthor(newName){
        this.#nameAuthor = newName;
    }

    set email(newEmail){
        this.#email = newEmail;
    }

    set birthdate(newBirthdate){
        this.#birthdate = newBirthdate;
    }

    toString() {
        return `Author[name=${this.#nameAuthor}, email=${this.#email}, birthdate=${parse(this.#birthdate)}]`;
    }
}

const dadosAuthor = new Author("Jaqueline de Almeida", "meuamil@mail.com", "20/01/1874")
console.log(dadosAuthor.birthdate);

class Book extends Author{
    #nameBook;
    #isbn;
    #author;
    #price;
    #qty;

    constructor(nameBook, isbn, author, price, qty){
        super(nameBook);
        this.#nameBook = nameBook;
        this.#isbn = isbn;
        this.#author = author;
        this.#price = price;
        this.#qty = qty;
    }

    get nameBook(){
        return  this.#nameBook;
    }

    get isbn(){
        return  this.#isbn;
    }

    get author(){
        return  this.#author;
    }

    get price(){
        return this.#price;
    }

    get price(){
        return this.#price;
    }

    get qty(){
        return this.#qty;
    }

    set price(newPrice){
       this.#nameBook = newPrice;
    }

    set qty(newQty){
        this.#qty = newQty;
     }

    getAuthorBook(){
        return this.#author
    }
}

const manualDeGinecologia = new Book("Manual de Ginecologia Natural e Autônoma", "1234", ["Jaqueline de Almeida","Lais Souza", "Luma Flores", "May Coelho"], 10.00, 1.000)
console.log(manualDeGinecologia.getAuthorBook());



