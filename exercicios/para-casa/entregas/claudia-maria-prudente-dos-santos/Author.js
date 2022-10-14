/* - Escreva uma classe chamada `Author`, uma classe que representa um autor de livros.
-  Essa classe contém:
    - Três atributos privados: `name` (String), `email` (String), e `birthdate` (Date ou DateTime);
    - Um método construtor que inicialize `name`, `email` e `birthdate` com os valores passados;
    
    `class Author(name, email) {......}`
    
    - Métodos de acesso público (getter/setter) para cada um dos atributos;
*/

class Author {
  #authorName;
  #email;
  #birthDate;
  constructor(name, email, birthDate) {
    this.#authorName = name;
    this.#email = email;
    this.#birthDate = birthDate;
  }

  get authorName() {
    return this.#authorName;
  }

  set authorName(name) {
    this.#authorName = name;
  }

  get email() {
    return this.#email;
  }

  set email(email) {
    this.#email = email;
  }
  get birthDate() {
    return this.#birthDate;
  }

  set birthDate(birthDate) {
    this.#birthDate = birthDate;
  }
}

module.exports = Author;
