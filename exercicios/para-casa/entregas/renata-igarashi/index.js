
import { Book } from './Book.js';

const book1 = new Book('Jules Verne', 'Twenty Thousand Leagues Under the Seas', '123456', 9.5, 10)


book1.getBooksInfo(); 
// Book's Title: Twenty Thousand Leagues Under the Seas 
// Author: Jules Verne 
// ISBN: 123456 
// Price: 9.5 
// Quantity: 10
// Jules Verne

book1.getAuthor(); // Jules Verne


book1.getPrice(); // 9.5
book1.setPrice(12.99);
book1.getPrice(); // 12.99

book1.getISBN(); // 123456

book1.setQty(5);
book1.getQty(); // 5

book1.getBooksInfo(); 
// Book's Title: Twenty Thousand Leagues Under the Seas 
// Author: Jules Verne 
// ISBN: 123456 
// Price: 12.99 
// Quantity: 5