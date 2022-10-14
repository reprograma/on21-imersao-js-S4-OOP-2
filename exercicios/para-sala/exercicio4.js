/* Abstração é como você começará a deixar apenas parte da sua implementação "exposta" e ocultar o que for 
interno daquela classe
- criar um signup()(criação de nova conta);
- criar um login()(acessar a conta);
- criar um metódo que valida o email ao criar uma conta(dentro do metodo signup());
*/

class User{
    
    email;
    name;
    #password; 

    constructor(){}

    signUp(name, email, password){
        let isValidated = false;
        isValidated = this.#validateEmail(email);

        if(isValidated){
            this.name = name;
            this.email = email;
            this.#password = password;
            console.log('Usuário criado com sucesso')
        } else {
            console.log('Autenticação falhou')
        }
    }

    #validateEmail(email){
        let regex =  new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        
        if(regex.test(email)){
            console.log("Email validado")
            return true
        } else{
            console.log("Email incorreto")
        }
    }

    login(email, password){
        if(email === this.email && password === this.#password){
            return `Login efetuado com sucesso`
        }
        else{
            return `ERROR! Falha no login`
        }
    }

    set password(newPassword){
        this.#password = newPassword
        return `Senha alterada com sucesso`
    }

    get email(){
        return `O email encontrado foi ${this.email}`;
    }

   // getPassword(){ return this.#password } -> método recebe um parâmetro e por isso imprimiu a senha

}

const createBabi = new User();
console.log(createBabi.signUp('Babi', 'babi@gmail.com', '123#'));
