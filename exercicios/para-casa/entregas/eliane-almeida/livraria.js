import { Author } from './classAuthor.js';
import { Book } from './classBook.js';

const firstAuthor = new Author('Zé Pequeno', 'pequenoze@email.com.br', '22/08/1976')
const firstBook = new Book('Zé Pequeno', 'Tres Patinhos Na Lagoa', 55582028, 18.99, 300 )

console.log(firstBook.nameAuthor())