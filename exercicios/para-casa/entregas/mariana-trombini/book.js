const Author = require('./author')

class Book extends Author {

  #title
  #isbn
  #price
  #quantity

  constructor(title, isbn, name, price, quantity){
    super(name)
    this.#title = title
    this.#isbn = isbn
    this.#price = price
    this.#quantity = quantity
  }

 get title(){
  return this.#title
 }

  getTitle(){
    return `Book's title: ${this.title}`
  }

  get isbn(){
    return this.#isbn
  }

  getIsbn(){
    return `Book's ISBN: ${this.isbn}`
  }

  get name(){
    return this._name
  }

  getAuthor(){
    return `Author's name: ${this.name}`
  }

  get price(){
    return this.#price
  }

  getPrice(){
    return `Book's price: ${this.#price}`
  }

  get quantity(){
    return this.#quantity
  }

  getQuantity(){
    return `Book's quantity: ${this.#quantity}`
  }

  set title(newTitle){
    return this.#title = newTitle
  }

  setTitle(newTitle){
    this.title = newTitle
    return `Name changed successfully. New book's name: ${this.#title}`
  }

  set isbn(newIsbn){
    return this.#isbn = newIsbn
  }

  setIsbn(newIsbn){
    this.isbn = newIsbn
    return `ISBN changed successfully. New book's ISBN: ${this.isbn}`
  }

  set name(newName){
    return this._name = newName
  }

  setAuthor(newAuthor){
    this.name = newAuthor
    return `Author's name changed successfully. New book's author: ${this.name}`
  }

  set price(newPrice){
    return this.#price = newPrice
  }

  setPrice(newPrice){
    this.price = newPrice
    return `Price changed successfully. New book's price: ${this.price}`
  }

  set quantity(newQuantity){
    return this.#quantity = newQuantity
  }

  setQuantity(newQuantity){
    this.quantity = newQuantity
    return `Quantity changed successfully. New book's quantity: ${this.quantity}`
  }

  printBook(){
    return `--- Book --- \nTitle: ${this.title}, \nISBN: ${this.isbn}, \nAuthor: ${this.name}, \nPrice: R$${this.price}, \nQuantity: ${this.quantity}`
  }
}

module.exports = Book

