const Book = require('./book')

const book = new Book('The Shinning', 'any_isbn', 'Stephen King', 59.74, 1)

book.getName() // Book's title: The Shinning
book.getAuthor() // Author's name: Stephen King

book.setAuthor('Mary Shelley')// Author's name changed successfully. New book's author: Mary Shelley
book.getAuthor() // Author's name:  Mary Shelley