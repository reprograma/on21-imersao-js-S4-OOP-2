

// - criar um signup()(criacao de nova conta);
// - criar um login()(acessar a conta);
// - criar um metodo que valida o email;

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
            this.#password = password 
            console.log("User criado com sucesso")
        }else{
            console.log("A conta não foi criado. Por gentileza, verificar as informacoes inseridas")

        }
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
           return `Login realizado com sucesso/Login successfully`
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


const createJaque = new User();
console.log(createJaque.signup("Jaque", "meuemail@mail.com", "1234#"));

