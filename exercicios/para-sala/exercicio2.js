/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. 

convenções de segurança da oop: 

- público public - name 
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

    //getter e setter

  /* get password(){
    return this.#password;
   }

   set password(newPassword){
        this.#password = newPassword;
   }*/

   getPassword(){
        return this.#password
   }

   get password(){  
    return this.#password
   }


}

const userJessi = new User('Jéssica', 'osko_jess', 'oskojess@gmail.com', 'senha123#');


// dando seguimento ao exercicio 1, o atributo senha não pode ser retornado quando criamos
// um novo objetoa partir do user. Precisamos refatorar nosso código
// público - public - this.name
// privado - private - #
// protegido - protected - _

class User { 
    #senha
    email

    constructor(name, userName, email, senha) {
        this.name = name
        this.userName = userName
        this.email = email
        this.#senha = senha
    }

   get email() {
    return this.email
   }

   get senha() {
    return this.#senha
   }

   login(email, senha) {
        if (email === this.email && senha === this.#senha){
            return 'Login realizado com sucesso';
        } else {
            return 'falha de login, verifique seu email ou senha';
        }
    }

    set senha(novaSenha){
        this.#senha = novaSenha
        return 'sua senha foi alterada'
    }
    
}

module.exports = User;

const userRaissa = new User('Raissa', 'raissaBarata', 'raissa@gmail.com', '1234$')
console.log(userRaissa);
console.log(userRaissa.login('raissa@gmail.com', '1234$'));
console.log(userRaissa.senha = '12345$')
console.log(userRaissa.login('raissa@gmail.com', '1234$'));
console.log(userRaissa.senha);
