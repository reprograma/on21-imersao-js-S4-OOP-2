const Book = require('./Book')

const hungerGames = new Book("The Hunger Games", "12345678987654322", 40, 200, "Suzanne Collins")

hungerGames.getAuthor()
//Suzanne Collins

hungerGames.getName()
//The Hunger Games

hungerGames.nameBook
//The Hunger Games

hungerGames.setQty(100)
hungerGames.qty
//100