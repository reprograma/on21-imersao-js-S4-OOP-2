/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
<<<<<<< HEAD
um novo objeto a partir de User. Precisamos refatorar nosso código. */


// CONVENÇOES DE SEGURANÇA
// - publico = public - this.name  ** javascript mais atual
// - privado = private - # (protegido e nao pode ser acessada ou visualizada)** javascript mais atual e metodos get e set
// - protegido = protected - _  (protegido mas pode visualizar - nao pode ser modificado) - pode ser encontrado, mas e antigo


export class User{

    #senha;
    email;

    constructor(nome, username, email, senha){
        this.nome = nome;
        this.username = username;
        this.email = email;
        this.#senha = senha;
    }

    login(email, senha){
        if(email === this.email && senha === this.#senha){
            return `Login realizado com sucesso`;
        } else {
            return `Autenticação falhou`;
        }
    }

    getSenha(){
        return `Minha senha é: ${this.#senha}`
    }

    set Password(newPassword){
        this.#senha = newPassword
        return `Senha alterada`
    }

    get email(){
        return `o seu email cadastrado é ${this.email}`
    }
=======
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

>>>>>>> main

}

const userJessi = new User('Jéssica', 'osko_jess', 'oskojess@gmail.com', 'senha123#');
<<<<<<< HEAD
console.log((userJessi));

console.log(userJessi.login("oskojess@gmail.com", "senha123#")) // senha certa
console.log(userJessi.login("oskojess@gmail.com", "senha1#")) // senha errada

console.log(userJessi.setPassword('123456'));

console.log((userJessi));

console.log((userJessi.email()))
console.log((userJessi.getSenha()))


//get junto é um metodo que pode modificar alguma coisa
// get separado é disponbilizar um dado privado, como objeto (mapeando valores)
// em separado: get = acessa set = modifica 

// get junto é obtendo uma informação e separadado é acessar uma propriedade

//capsular e ocultar o maximo possivel da sua implementação
// encapsular e colocar em privado e usar os metodos get e set 

//exemplo de capsula de remedio, o que vemos e o que contem 

//encapsulamento é camadas de proteção / expoe informaçoes selecionada
// get e set sao esses metodos no encapsuamento, que é um processo inicial de encapsulamento
=======
>>>>>>> main


