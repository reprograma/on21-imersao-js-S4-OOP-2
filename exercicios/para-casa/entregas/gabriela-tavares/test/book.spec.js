const Book = require("../Book");

describe("Book", () => {
  let bookObject = new Book("O Foco", "Daniel Goleman", "1458938", 46.86, 1500);

  it("Should instantiate a new Book", () => {
    expect(bookObject).toEqual(
      expect.objectContaining({
        nameAuthor: "Daniel Goleman",
      })
    );
  });

  it("Should return name of Book", () => {
    expect(bookObject.nameBook).toBe("O Foco");
  });

  it("Should return isbn of Book", () => {
    expect(bookObject.isbn).toBe("1458938");
  });

  it("Should return price of Book", () => {
    expect(bookObject.price).toEqual(46.86);
  });

  it("Should return quantity of Book", () => {
    expect(bookObject.qty).toEqual(1500);
  });

  it("Should return Book name wih message 'The name of the Book is O Foco'", () => {
    expect(bookObject.getNameBook()).toBe("The name of the Book is O Foco");
  });

  it("Should return Book isbn  wih message 'The isbn of the Book is 1458938'", () => {
    expect(bookObject.getIsbn()).toBe("The isbn of the Book is 1458938");
  });

  it("Should return Book price wih message 'The price of the Book is 46.86'", () => {
    expect(bookObject.getPrice()).toBe("The price of the Book is 46.86");
  });

  it("Should return Book quantity wih message 'The qtd of the Book is 46.86'", () => {
    expect(bookObject.getQtd()).toEqual("The qtd of the Book is 1500");
  });

  it("Should change name of Book and return the message 'Name has been updated successfully'", () => {
    expect(bookObject.setNameBook("Deixe a neve cair")).toBe(
      "Name has been updated successfully"
    );
  });

  it("Should change isbn of Book and return the message 'Isbn has been updated successfully'", () => {
    expect(bookObject.setIsbn("8965743")).toBe(
      "Isbn has been updated successfully"
    );
  });

  it("Should change price of Book and return the message 'Price has been updated successfully'", () => {
    expect(bookObject.setPrice(55.9)).toBe(
      "Price has been updated successfully"
    );
  });

  it("Should change qtd of Book and return the message 'Qtd has been updated successfully'", () => {
    expect(bookObject.seQty(1200)).toBe("Qtd has been updated successfully");
  });

  it("Should return the message with name of Author 'The name of Author the Deixe a neve cair is Daniel Goleman'", () => {
    expect(bookObject.nameBookAuthor(1200)).toBe(
      "The name of the Author of the book Deixe a neve cair is Daniel Goleman"
    );
  });
});
