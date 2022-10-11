/* Crie uma classe chamada Author que extenderá de User as informações de email e password e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dois metódos, um para criar o post que incrementará a quantidade de post e 
o outro obter o número de post criados. 

Observação: Não criaremos a implementação da adição do post; */

class User {

    #password;
    email;
    //  paramatrizar os valores que seram privados

    constructor(name,userName,email,password){
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.#password = password;
        // não acessa a senha - método privado
    }

    login(email, password){
        if(email === this.email &&  password === this.#password){
            return `Login realizado com sucesso`
        }else{
            return `Autenticacao falhou / Autentication failed`
        }
    }

    get password(){
        return this.#password 
    }
    //  acessa

    set password(newPassword){
        this.#password = newPassword;
    }

}

class Author  extends  User {

    #numPost;

    constructor(email,password){
        super(email,password)
        this.#numPost = 0;
    }

    isLogged(){

    }

    cretePost(post){
        this.#numPost++;
    }

    get numPost(){
        return this.
    }


}


