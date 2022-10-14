const Author = require('./Author')

class Book extends Author {
   constructor(bookName, isbn, authorName, price, qty) {
    super(authorName)
    this.bookName = bookName;
    this.isbn = isbn;
    this.price = price;
    this.qty = qty;
   }

   get bookName(){
      return this.bookName;
   }

   set bookName(newBookName){
      return this.bookName = newBookName;
   }

   get isbn(){
      return this.isbn;
   }

   set isbn(id){
      return this.isbn = id;
   }

   get price(){
      return this.price;
   }

   set price(value){
      return this.price = value;
   }

   get qty(){
      return this.qty;
   }

   set qty(newQty){
      return this.qty = newQty;
   }

   getBookName(){
      return this.bookName;
   }

   getISBN(){
      return this.isbn;
   }

   getPrice(){
      return this.price;
   }

   setPrice(value){
      return this.price = value;
   }

   getQty(){
      return this.qty;
   }

   setQty(quantity){
      return this.qty = quantity;
   }

   getBookData(){
      return `O nome do livro é ${this.bookName}, o código: ${this.isbn}, escrito pela Autora ${this.authorName}, o livro custa ${this.price} e no estoque temos ${this.qty} unidades.`
   }
}

const BookData = new Book('Psicologia das Cores', '658828005X', 'Eva Heller', 'R$123,23', '12')
