
const Author = require ('./Author.js')


class Book extends Author {
  
    #isbn;
    #author;
    #price;
    #qty;
   
  
    
         constructor(name, isbn, author,  price, qty){
            super(name)
       
         
         this.#isbn = isbn;
         this.#author = author
         this.#price = price;
         this.#qty = qty;
        
         
         }
    
       
         get isbn() {
            return this.#isbn
        }
    
       get author(){
             return this.#author
       
       }
           get price() {
            return this.#price
        }
    
        get qty() {
            return this.#qty
        }
    
       
         set price (newPrice) {
            this.#price = newPrice
        }
    
        set qty (newQty) {
            this.#qty = newQty
        }
        
        getAuthor(){
       return `O nome do Author é ${this.#author}`
        }
        
    }
    

    
  
    
    const book1 = new Book('Artemiza', 'Código limpo','Robert C. Martin','77,80','10') 
    

    
    
   
    
    