/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. 

convenções de segurança da oop: 

- público public - this.name 
- privado private  - #
- protegido protected  - _ */


class User {

    #password;
    email;
    
    constructor(name, userName, email, password){
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.#password = password;
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

   getEmail(){}


}

const userJessi = new User('Jéssica', 'osko_jess', 'oskojess@gmail.com', 'senha123#');
console.log(userJessi.password)

userJessi.password = 'senhaalterada'

console.log(userJessi.password)

