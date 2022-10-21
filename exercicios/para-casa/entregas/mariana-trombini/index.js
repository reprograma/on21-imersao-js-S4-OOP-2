const Book = require('./book')

const book = new Book('The Shinning', 'any_isbn', 'Stephen King', 59.74, 1)

book.getTitle() // Book's title: The Shinning
book.getAuthor() // Author's name: Stephen King

book.setAuthor('Mary Shelley')// Author's name changed successfully. New book's author: Mary Shelley
book.getAuthor() // Author's name:  Mary Shelley

book.getIsbn() //  Book's ISBN: any_isbn
book.setPrice(109.98) 
book.setQuantity(2)

book.printBook()
/*
--- Book --- 
Title: The Shinning, 
ISBN: any_isbn, 
Author: Mary Shelley, 
Price: R$109.98, 
Quantity: 2 
*/