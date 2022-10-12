/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. */

// - público - this.name
// - privado - #
// - protegido - _

class User {
  #password;
  email;

  constructor(name, userName, email, password) {
    this.nome = name;
    this.username = userName;
    this.email = email;
    this.#password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.#password) {
      return `Login Realizado!`;
    } else {
      return `Email e senha não estão corretos`;
    }
  }

  set password(novaSenha) { // para propriedades privadas
    this.#password = novaSenha;
    return `Sua senha foi alterada!`;
  }

  get password(){ // para propriedades privadas // acessando o parametro 
    return this.#password;
  }

  getEmail(){
    this.email
  }  // obtendo o parametro
}

const novoUser = new User("Gabriela", "Gabi", "gabi@gmail.com", "senha123");
console.log(novoUser);

console.log(novoUser.login("gabi@gmail", "senha123"));

module.exports = User

// console.log(novoUser.setPassword("novaSenha123"));


// código da Jess

// class User {

//     #password;
//     email;
    
//     constructor(name, userName, email, password){
//         this.name = name;
//         this.userName = userName;
//         this.email = email;
//         this.#password = password;
//     }

//     login(email, password){
//         if(email === this.email && password === this.#password){
//            return `Login realizado com sucesso/Login successfully`
//         } else{
//         return `Autenticação falhou / Authentication failed`
//         }
//     }

//    get password(){
//     return this.#password;
//    }

//    set password(newPassword){
//         this.#password = newPassword;
//    }

//    getEmail(){}


// }
