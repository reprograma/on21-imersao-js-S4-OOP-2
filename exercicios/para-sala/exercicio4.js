<<<<<<< HEAD
/* Crie uma classe chamada Author que extenderá de User as informações de nome e terá um atributo privado com o número de post inicializando com 0. Essa classe terá dos metódos, um para criar o post e o outro obter o número de post criados. Observação: Criaremos a implementação da adição do post e da QUANTIDADE DE POST; */

class User {
  #password;
  email;
  constructor(name, userName, email, password) {
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.#password = password;
  }
  login(email, password) {
    if (email === this.email && password === this.#password) {
      return `Login realizado com sucesso/Login successfully`;
    } else {
      return `Autenticação falhou / Authentication failed`;
    }
  }
  get password() {
    return this.#password;
  }
  set password(newPassword) {
    this.#password = newPassword;
  }
}


// codigo da mari

class Author extends User {
  postsList;
  #postsQtd;

  constructor(email, password) {
    super(email, password);

    this.#postsQtd = 0;
    this.postsList = [];
  }

  createPost(post) {
    this.postsList.push(post);
    this.#postsQtd++;
  }

  get postQtd() {
    return `${this.#postsQtd} post(s) created.`;
  }

  get postsList() {
    return `Author posts: ${this.postsList} `;
  }
}

const author = new Author("any_email@mail.com", "123456");

author.createPost("First Post");
// ------------------------------------------------------
author.postQtd; // 1 post(s) created.
author.postsList; // Author posts: First Post
// ------------------------------------------------------
author.createPost("Second Post");
// ------------------------------------------------------
author.postQtd; // 2 post(s) created.
author.postsList; // Author posts: First Post,Second Post
=======
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
>>>>>>> main
