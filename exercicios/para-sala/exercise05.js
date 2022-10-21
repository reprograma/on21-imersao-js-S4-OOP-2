const User = require('./exercise04')
const Author = require('./exercise03')

class Admin extends User {
  constructor(email, password){
    super(email, password)
  }

  login(email, password){
    let isAdmin = true
    if(email === this.email && password === this.password && isAdmin) {
      return `Admin Login successfully`
    } else {
      return `Invalid email or password, authentication failed. Please check and try again.`
    }
  }
}

const newAuthor = new Author()
console.log(newAuthor.signUp('Mariana', 'any_mail@mail.com', 'any_password'))
/*
Validated Email.
Account created successfully.
 */
console.log(newAuthor.login('any_mail@mail.com', 'any_password')) // Login successfully

//--------------------------------------------------------------------------------------

const newAdmin = new Admin()
console.log(newAdmin.signUp('Mariana','any_mail@mail.com', 'any_password'))
/*
Validated Email.
Account created successfully.
 */

console.log(newAdmin.login('any_mail@mail.com', 'any_password'))
// Admin Login successfully