class AuthorExampleX {
    constructor(name){
        this.name = name;
    }
}

class Book extends AuthorExampleX {
    constructor(name, nameAuthor){
        super(nameAuthor)
        this.name = name;
    } 
}

const createAuthor = new AuthorExampleX ("Nome Author")
const createBook = new Book ("Nome do Livro")

console.log(createBook)