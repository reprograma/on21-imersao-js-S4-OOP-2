const Author = require("../Author");
describe("Author", () => {
  let authorObject = new Author(
    "Daniel Goleman",
    "contato@danielgoleman.com.br",
    "1946-03-07"
  );

  it("Should instantiate a new Author", () => {
    expect(authorObject).toEqual(
      expect.objectContaining({
        nameAuthor: "Daniel Goleman",
        email: "contato@danielgoleman.com.br",
        birthdate: "1946-03-07",
      })
    );
  });

  it("Should return name of Author", () => {
    expect(authorObject.nameAuthor).toBe("Daniel Goleman");
  });

  it("Should return email of Author", () => {
    expect(authorObject.email).toBe("contato@danielgoleman.com.br");
  });

  it("Should return birthDate of Author", () => {
    expect(authorObject.birthdate).toBe("1946-03-07");
  });

  it("Should return the message with name of Author 'The author's name is Daniel Goleman'", () => {
    expect(authorObject.getNameAuthor()).toBe(
      "The author's name is Daniel Goleman"
    );
  });

  it("Should return the message with email of Author 'The author's email is contato@danielgoleman.com.br'", () => {
    expect(authorObject.getEmail()).toBe(
      "The author's email is contato@danielgoleman.com.br"
    );
  });

  it("Should return the message with birthDate of Author 'The author's birthDate is 1946-03-07'", () => {
    expect(authorObject.getBirthDate()).toBe(
      "The author's birthDate is 1946-03-07"
    );
  });

  it("Should change the name of Author and return a message: 'Name has been updated successfully'", () => {
    expect(authorObject.setNameAuthor("Clarice Lispector")).toBe(
      "Name has been updated successfully"
    );
  });

  it("Should change the email of Author and return a message: 'Email has been updated successfully'", () => {
    expect(authorObject.setEmail("clarice.lispector@gmail.com")).toBe(
      "Email has been updated successfully"
    );
  });

  it("Should change the BirthDate of Author and return a message: 'BirthDate has been updated successfully'", () => {
    expect(authorObject.setEmail("danielg@danielgoleman.com.br")).toBe(
      "Email has been updated successfully"
    );
  });
});
