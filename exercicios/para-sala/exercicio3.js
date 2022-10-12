/* Crie uma classe chamada Author que extenderá de User as informações de nome e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post que incrementará a quantidade de post e 
o outro obter o número de post criados. 

Observação: Não criaremos a implementação da adição do post e da quantidade de post; */


class User {
  #password;
  email;

  constructor(name, username, email, password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.#password = password;
  }

  login(email, password) {
    if(email === this.email && password === this.#password) {
      return `Login realizado com sucesso/ Login successfully`
    } else {
      return `Autenticação falhou/ Authentication failed`
    }
  }

  get password() {
    return this.#password
  }

  setPassword(newPassword) {
    this.#password = newPassword;
    return `Senha aterada`
  }

  get email() {
    return this.#email
  }
}

class Author extends User {
  #numPost
  constructor(name) {
    super(name);
    this.#numPost = 0
    this.post = []
  }

  createPost(post){
    this.post.push(post)
    this.#numPost++;
  }

  get numPost(){
    return `${this.#numPost}`
  }
}