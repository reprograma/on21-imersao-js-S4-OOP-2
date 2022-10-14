- Explicação do exercício: 
  
- Escreva uma classe chamada `Author`, uma classe que representa um autor de livros.
-  Essa classe contém:
    - Três atributos privados: `nameAuthor` (String), `email` (String), e `birthdate` (Date ou DateTime);
    - Um método construtor que inicialize `nameAuthor`, `email` e `birthdate` com os valores passados;
    
    `class Author(nameAuthor, email) {......}`
    
    - Métodos de acesso público (getter/setter) para cada um dos atributos;
  
    -  Escreva também uma classe chamada `Book`, essa classe contém:
    - Quatro variáveis privadas: `nameBook` (String), `isbn` (String), `author` (Author, assuma que o livro só tem um único autor), `price` (double), e `qty` (int);

 class Book extends Author{
    constructor(nameAuthor, nameBook, isbn, price, qty){
        super(name)
        this.nameBook = nameBook;
        this.isbn = isbn;
        this.price = price;
        this.qty = qty;
    }
 }
  
    - Métodos acessores: `getName()`, `getISBN()`, `getAuthor()`, `getPrice()`, `setPrice()`, `getQty()`, `setQty()`
    -  Por fim, escreve uma classe principal que instancie um livro (`Book`), e imprima o nome do autor através da instância de `Book`.
    - 
    ---

class Author{
    constructor(nameAuthor, email, birthdate){
        this.nameAuthor = nameAuthor
        this.email = email
        this.birthdate = birthdate
    }
}

class Book extends Author{
    constructor(nameAuthor, ){
        super(nameAuthor)
        this.name = name;
    } 
}

const createAuthor = new AuthorExampleX ("Nome Author")
const createBook = new Book ("Nome do Livro")

console.log(createBook)