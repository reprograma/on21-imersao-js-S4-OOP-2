class Author {
    constructor(name){
        this.name = name;
    }
}

class Book extends Author {
    constructor(name, nameAuthor){
        super(nameAuthor)
        this.name = name;
    } 
}

const createAuthor = new AuthorExampleX ("Nome Author")
const createBook = new Book ("Nome do Livro")

console.log(createAuthor)
console.log(createBook)