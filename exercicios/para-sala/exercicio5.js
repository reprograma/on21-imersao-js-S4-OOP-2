class User { 
    email; 
    name; 
    #password; 
    constructor(){} 
    
    signUp(name, email, password){ 
        let isValidated = false; 

        isValidated = this.#validateEmail(email) 

        if(isValidated){ 
            this.name = name; 
            this.email = email; 
            this.#password = password;  

            return "User criado com sucesso" 
        } else{ 
            return "A conta não foi criada. Por gentileza, verificar as informações inseridas." } 
        }

        #validateEmail(email){ 
            let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'); 

            if(regex.test(email)){ 
                console.log("Email correto") 
                return true 
            } else{ 
                console.log("Email incorreto") 
                return false
            } 
        } 

        login(email, password){ 
            if(email === this.email && password === this.#password){ 
                return `Login realizado com sucesso/Login successfully` 
            } else{ 
                return `Autenticação falhou / Authentication failed` } 
            } 
            
            get password() { 
                return this.#password; 
            } 
                
            set password(newPassword){ 
                this.#password = newPassword; 
            } 
        } 

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

// // let user1 = new User()
// // console.log(user1);
// // console.log(user1.signUp('Renata', 'renata@ecom', '123456'))
// // console.log(user1);


// const newAdmin = new Admin()
//  console.log(newAdmin.signUp('mari','any_mail@mail.com', 'any_password'))      

// console.log(newAdmin.login('any_mail@mail.com', 'any_password'))