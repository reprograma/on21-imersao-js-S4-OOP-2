const Author = require('./Author.js')

class Book extends Author {
  #isbn;
  #title;
  #price;
  #qty;

  constructor(name, isbn, title, price, qty) {
    super(name);
    this.#isbn = isbn;
    this.#title = title;
    this.#price = price;
    this.#qty = qty;
  }

  // ISBN
  get isbn(){
    return this.#isbn;
  }

  set isbn(isbn) {
    return this.#isbn = isbn;
  }

  getIsbn() {
    return `ISBN do Livro: ${this.#isbn}`;
  }

  setIsbn(isbn) {
    this.#isbn = isbn;
    return `O ISBN agora é: ${this.#isbn}`;
  }

  // TITLE
  get title(){
    return this.#title;
  }

  set title(title) {
    return this.#title = title;
  }

  getTitle() {
    return `Título do livro: ${this.#title}`;
  }

  setTitle(title) {
    this.#title = title;
    return `O nome do livro agora é: ${this.#title}`;
  }

  // PRICE
  get price(){
    return this.#price;
  }

  set price(price) {
    return this.#price = price;
  }

  getPrice() {
    return `Preço do Livro: ${this.#price}`;
  }

  setPrice(price) {
    this.#price = price;
    return `O preço do livro agora é: ${this.#price}`;
  }

  // QTY
  get qty(){
    return `Preço do livro: ${this.#qty}`;
  }

  set qty(quantidade) {
    return this.#qty = quantidade;
  }

  getQty() {
    return `Preço do livro: ${this.#qty}`;
  }

  setQty(quantidade) {
    this.#qty = quantidade;
    return `O preço do livro agora é: ${this.#qty}`;
  }
}

const meuLivro = new Book('Valenthina', '256', 'O Segredo', 35, 2)

module.exports = Book;