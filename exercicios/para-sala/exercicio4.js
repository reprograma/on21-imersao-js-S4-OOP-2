/* Abstração é como você começará a deixar apenas parte da sua implementação "exposta" e ocultar o que for 
interno daquela classe


- criar um signup()(criação de nova conta);
- criar um login()(acessar a conta);
- criar um metódo que valida o email ao criar uma conta(dentro do metodo signup());

*/

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


const createJessi = new User();
console.log(createJessi.signUp("Jéss", "oskojess@gmail.com", "1234#"))
