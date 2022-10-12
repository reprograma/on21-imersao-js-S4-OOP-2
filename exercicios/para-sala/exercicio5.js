class User {
    email;
    name;
    #password;

    constructor(){}

    signUp(name, email, password){
        let isValidated = false;
        console.log(isValidated)
        isValidated = this.#validateEmail(email)
        isValidated = this.#validatePassword(password)
        console.log(isValidated)

        if(isValidated){
            this.name = name;
            this.email = email;
            this.#password = password;
            console.log("User criado com sucesso")
        } else{
            console.log("A conta não foi criada. Por gentileza, verificar as informações inseridas.")
        }
    }


    #validatePassword(password){
        return true
    }

    #validateEmail(email){
        let regex =  new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        
        if(regex.test(email)){
            console.log("Email correto")
            return true
        } else{
            console.log("Email incorreto")
        }
    }

    login(email, password){
        if(email === this.email && password === this.#password){
           return `Login realizado com sucesso`
        } else{
        return `Autenticação falhou / Authentication failed`
        }
    }

   get password(){
    return this.#password;
   }

   set password(newPassword){
        this.#password = newPassword;
   }

}

class Author extends User{
    #numPost;

    constructor(nome){
        super(nome)
        this.#numPost = 0
        this.post = []
    }

    createPost(post){
        this.post.push(post)
        this.#numPost++    
      }
    
      get numPost(){
        return `${this.#numPost} post(s) created.` 
      }
    
      get post(){
        return `Author posts: ${this.post} `
      }
    
}

class Admin extends User{
    constructor(email, password){
        super(email, password)
    }

    login(email, password){
        let isAdmin = true;
        if(email === this.email && password === this.password && isAdmin){
            return `Login realizado com sucesso/Login successfully`
         } else{
         return `Autenticação falhou / Authentication failed`
         }
    }
}


const newAdmin = new Admin();
console.log(newAdmin.signUp('oskojess@gmail.com', 'senha'))
console.log(newAdmin.login('oskojess@gmail.com', 'senha'))


