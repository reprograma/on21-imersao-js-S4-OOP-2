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
    #name;
    #email;
    #birthdate;

    constructor(name, email, birthdate){
        this.#name = name;
        this.#email = email;
        this.#birthdate = birthdate;
    }

    get name() {
        return this.#name;
    }

    get email(){
        return this.#email;
    }

    get birthdate() {
        return this.#birthdate;
    }

    set name(newName){
        this.#name = newName;
    }

    set email(newEmail){
        this.#email = newEmail;
    }

    set birthdate(newBirthdate){
        this.#birthdate = newBirthdate;
    }

    toString() {
        return `Author[name=${this.#name}, email=${this.#email}, birthdate=${parse(this.#birthdate)}]`;
    }


}

const dadosAuthor = new Author("Jaqueline de Almeida", "jaqueshanti@gmail.com", "13/11/1984")

console.log(dadosAuthor.birthdate)

class Book extends Author{
    #name;
    #isbn;
    #author;
    #price;
    #qty;

    constructor(name, isbn, author, price, qty){
        super(name);
        this.#name = name;
        this.#isbn = isbn;
        this.#author = author;
        this.#price = price;
        this.#qty = qty;
    }

    get name(){
        return  this.#name;
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
       this.#name = newPrice;
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



