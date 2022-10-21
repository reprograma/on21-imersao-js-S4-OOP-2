const Author = require("./author")

describe('Author class', () => {
  let author
  
  beforeEach(() => {
    author = new Author('Stephen King', 'any_email@mail.com', '1947-09-21')    
  })
  
  test('Should have name property', () => {
    expect(author).toHaveProperty('name')
  })
  test('Should have email property', () => {
    expect(author).toHaveProperty('email')
  })
  test('Should have birth_date property', () => {
    expect(author).toHaveProperty('birth_date')
  })
  test('Should not have book property', () => {
    expect(author).not.toHaveProperty('book')
  })
  test("Should return the author's name", () => {
    expect(author.name).toBe('Stephen King')
  })
  test("Should return the author's email", () => {
    expect(author.email).toBe('any_email@mail.com')    
  })
  test("Should return the author's birth date", () => {
    expect(author.birth_date).toBe('1947-09-21')
  })
  test("Should change the author's name", () => {
    const newName = 'King'
    author.name = newName
    expect(author.name).toBe('King')
  })
  test("Should change the author's email", () => {
    const newEmail = 'another_email@mail.com'
    author.email = newEmail
    expect(author.email).toBe('another_email@mail.com')
  })
  test("Should confirm the author's birth_date", () => {
    const newBirthDate = '1947-09-20'
    expect(author.birth_date).not.toBe(newBirthDate)
  })
})