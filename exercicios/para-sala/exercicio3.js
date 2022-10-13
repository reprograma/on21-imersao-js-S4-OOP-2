/* Crie uma classe chamada Author que extenderá de User as informações nome e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post e 
o outro obter o número de post criados. 

Observação: Criaremos a implementação da adição do post e da QUANTIDADE DO POST; */

class User {
    #password;
    email;

    constructor(name, username, email , password){
        this.name = name;
        this.username = username;
        this.email = email;
        this.#password = password;
    }

    login(email, password){
        if(email === this.email && password === this.#password){
            return "Login successfully"; 
        } else{
            return "Authentication failed";
        }
    }
    //getter e setter
    set password(newPassword){
       this.#password = newPassword;

       return "Change password successfully"
    }

    get password(){
        return this.#password;
    }
}

const userEvelin = new User("evelin", "evelinUne", "evelinune@email.com", "2233425");


class Author extends User{
    #postNumber

    constructor(name, postNumber){
        super(name, postNumber)
        this.#postNumber = 0;
    }

    createPost(post){
        this.#postNumber++;
    }

    get numPost(){
        return this.#postNumber;
    }
}

class Author extends User {

    postsList
    #postsQtd
  
    constructor(email, password) {
      super(email, password)
  
      this.#postsQtd = 0
      this.postsList = []
    }
  
    createPost(post){
      this.postsList.push(post)
      this.#postsQtd++    
    }
  
    get postQtd(){
      return `${this.#postsQtd} post(s) created.` 
    }
  
    get postsList(){
      return `Author posts: ${this.postsList} `
    }
  
}
  
  const author = new Author('any_email@mail.com', '123456')
  
  author.createPost('First Post')
