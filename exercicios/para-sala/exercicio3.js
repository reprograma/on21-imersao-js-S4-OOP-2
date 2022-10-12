/* Crie uma classe chamada Author que extenderá de User as informações de nome e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dois metódos, um para criar o post e 
o outro obter o número de post criados. 

Observação: Criaremos a implementação da adição do post e da QUANTIDADE DE POST; */

class User {
  #senha;
  constructor(nome, userName, email, senha) {
    this._nome = nome; 
    this.userName = userName;
    this.email = email;
    this.#senha = senha; // privado
  }
  login(email, senha) {
    if (this.email === email && this.#senha === senha) {
      return `Login realizado com sucesso!`;
    } else {
      return `Falha na autenticação, email ou senha não confere!`;
    }
  }

}
class Author extends User {
  #numPost
  constructor(nome, posts, numPost) {
    super(nome);
    this.#numPost = 0; 
    this.posts = [];
  }
  
  creatPost(novoPost){
    this.posts.push(novoPost)
    this.#numPost++   
  }
  get numPost(){
    return `Você tem ${this.#numPost} post criados`
  }
  get posts(){
    return `Esses foram seus posts ${this.posts}`
  }
}
