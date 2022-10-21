// criar um signup() - criação de nova conta
// criar um login() - acessar a conta
// criar um método que valida o email ao criar uma conta

class User {
  
  email
  name
  #password // ao declarar o privado precisa colocar o # e propriedade antes do constructor
  

  constructor() {}

  signUp(name, email, password) {
    let isValidated = false
       isValidated = this.#validateEmail(email)
    // isValidated = this.#validatePassword(password)

    if(isValidated){
      this.name = name
      this.email = email
      this.#password = password
      console.log('Account created successfully.')
      return true
    } else {
      console.log('Error. Please check the information provided.')
      return false
    }
  }

  #validateEmail(email){
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    if(regex.test(email)){
      console.log('Validated Email.')
      return true
    } else {
      console.log('Incorrect Email.')
      return false 
    }
  }

  // #validatePassword(password){
  //    return true
  // }
  
  login(email, password){
      if(email === this.email && password === this.#password) {
          return `Login successfully`
      } else {
          return `Invalid email or password, authentication failed. Please check and try again.`
      }
  }
  
  get password(){
    return this.#password
  }

  set password(newPassword) {
      this.#password = newPassword
      return 'Password changed successfully'
  }

}

// const userProfile = new User ()
// userProfile.signUp('Mari', 'any_email@mail.com', 'any_password')
// console.log(userProfile)


/*
Validated Email.
Account created successfully.
User { email: 'any_email@mail.com', name: 'Mari' } */

module.exports = User