<<<<<<< HEAD
class User {
//metodo de acesso
    #password; // .atributo privado
    email; // .atributo publico

    constructor(name, userName, email, password) {
=======
/* Crie uma classe chamada Author que extenderá de User as informações de nome e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post e 
o outro obter o número de post criados. 

Observação: Criaremos a implementação da adição do post e da QUANTIDADE DE POST; */


class User {

    #password;

    constructor(name, userName, email, password){
>>>>>>> main
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.#password = password;
    }

<<<<<<< HEAD
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

/* 
Essa classe terá dois metódos, um para criar o post que incrementará a quantidade de post e 
o outro obter o número de post criados. 

Observação: Não criaremos a implementação da adição do post; */

class Author extends User {

    #numPost;

    constructor(email, password){
        super(email, password)

        this.#numPost = 0
    }

    isLogged(){
        //método para verificar se está logado
    }

    createPost(post){
        this.#numPost++;
    }
    
    get numPost(){
        return this.#numPost
    }

    set numPost(number){
        return this.#numPost + number
    }


}

const createAuthor = new Author("xenia@email.com", "1234")
console.log(createAuthor);
=======
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

let authorJess = new Author('oskojess', '1978927')







>>>>>>> main


