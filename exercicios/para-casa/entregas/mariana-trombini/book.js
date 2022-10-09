const Author = require('./author')

class Book extends Author {

  #name
  #isbn
  #price
  #quantity

  constructor(name, isbn, author, price, quantity){
    super(author)
    this.#name = name
    this.#isbn = isbn
    this.#price = price
    this.#quantity = quantity
  }

  getName(){
    return `Book's title: ${this.#name}`
  }

  getIsbn(){
    return `Book's ISBN: ${this.#isbn}`
  }

  getAuthor(){
    return `Author's name: ${this.name}`
  }

  getPrice(){
    return `Book's price: ${this.#price}`
  }

  getQuantity(){
    return `Book's quantity: ${this.#quantity}`
  }

  setName(newName){
    this.#name = newName
    return `Name changed successfully. New book's name: ${this.#name}`
  }

  setIsbn(newIsbn){
    this.#isbn = newIsbn
    return `ISBN changed successfully. New book's ISBN: ${this.#isbn}`
  }

  setAuthor(newAuthor){
    this.name = newAuthor
    return `Author's name changed successfully. New book's author: ${this.name}`
  }

  setPrice(newPrice){
    this.#price = newPrice
    return `Price changed successfully. New book's price: ${this.#price}`
  }

  setQuantity(newQuantity){
    this.#quantity = newQuantity
    return `Quantity changed successfully. New book's quantity: ${this.#quantity}`
  }
}

module.exports = Book

