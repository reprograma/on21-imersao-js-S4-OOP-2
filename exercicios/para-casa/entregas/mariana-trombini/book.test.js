const Book = require("./book")


describe('Book class', () => {
  let book
  
  beforeEach(() => {
    book = new Book('The Shinning', 'any_isbn', 'Stephen King', 59.74, 1)    
  })
  
  test('Should have name property', () => {
    expect(book).toHaveProperty('name')
  })
  test("Should return author's name", () => {
    expect(book.name).toEqual('Stephen King')
  })
  test("Should return book's title", () => {
    expect(book.getTitle()).toEqual("Book's title: The Shinning")
  })
  test("Should return book's isbn", () => {
    expect(book.getIsbn()).toEqual("Book's ISBN: any_isbn")
  })
  test("Should return book's price", () => {
    expect(book.getPrice()).toEqual("Book's price: 59.74")
  })
  test("Should return book's quantity", () => {
    expect(book.getQuantity()).toEqual("Book's quantity: 1")
  })
  test("Should change the book's name", () => {
    const newName = 'IT'
    book.setTitle(newName)
    expect(book.getTitle()).toBe("Book's title: IT")
  })
  test("Should change the book's isbn", () => {
    const newIsbn = 'another_isbn'
    book.setIsbn(newIsbn)
    expect(book.getIsbn()).toBe("Book's ISBN: another_isbn")
  })
  test("Should change the author's name", () => {
    const newName = 'King'
    book.setAuthor(newName)
    expect(book.name).toBe('King')
  })
  test("Should change the book's price", () => {
    const newPrice = 84.32
    book.setPrice(newPrice)
    expect(book.getPrice()).toBe("Book's price: 84.32")
  })
  test("Should change the book's quantity", () => {
    const newQuantity = 3
    book.setQuantity(newQuantity)
    expect(book.getQuantity()).toEqual("Book's quantity: 3")
  })
  test("Should print book with correct values", () => {
    expect( book.printBook()).toEqual(`--- Book --- \nTitle: The Shinning, \nISBN: any_isbn, \nAuthor: Stephen King, \nPrice: R$59.74, \nQuantity: 1`)
  })
})