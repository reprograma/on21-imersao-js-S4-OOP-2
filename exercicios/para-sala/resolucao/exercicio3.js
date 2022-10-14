/* Crie uma classe chamada Author que extenderá de User as informações de nome e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post e 
o outro obter o número de post criados. 

Observação: Criaremos a implementação da adição do post e da QUANTIDADE DE POST; */


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

}

class Author extends User{
    #numPost;

    constructor(nome){
        super(nome)
        this.#numPost = 0
        this.post = []
    }


    createPost(post){
        this.postsList.push(post)
        this.#postQtd++;
    }

    get postQtd(){
        return `${this.#numPost} post(s) creat`
    }

    get post(){
        return `Author posts: ${this.post}`
    }


}

const Author = new Author('meuemail@mail.com', '12345')

author.createPost('First Post')
// ------------------------------------------------------
author.postQtd // 1 post(s) created.
author.postsList // Author posts: First Post 
// ------------------------------------------------------
author.createPost('Second Post')
// ------------------------------------------------------
author.postQtd // 2 post(s) created.
author.postsList // Author posts: First Post,Second Post

