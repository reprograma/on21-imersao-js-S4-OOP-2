
/*Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

Fiz o fork do repositório.
Clonei o fork na minha máquina (git clone url-do-meu-fork).
Resolvi o exercício dentro da pasta resolução.
Adicionei as mudanças. (git add . para adicionar todos os arquivos, ou git add nome_do_arquivo para adicionar um arquivo específico)
Commitei a cada mudança significativa ou na finalização do exercício (git commit -m "Mensagem do commit")
Pushei os commits na minha branch (git push origin nome-da-branch)


Explicação do exercício: 
  
- Escreva uma classe chamada `Author`, uma classe que representa um autor de livros.
-  Essa classe contém:
    - Três atributos privados: `name` (String), `email` (String), e `birthdate` (Date ou DateTime);
    - Um método construtor que inicialize `name`, `email` e `birthdate` com os valores passados;
    
    `class Author(name, email) {......}`
    
    - Métodos de acesso público (getter/setter) para cada um dos atributos;
  
    -  Escreva também uma classe chamada `Book`, essa classe contém:
    - Quatro variáveis privadas: `name` (String), `isbn` (String), `author` (Author, assuma que o livro só tem um único autor), `price` (double), e `qty` (int);
  
    - Métodos accessories: `getName()`, `getISBN()`, `getAuthor()`, `getPrice()`, `setPrice()`, `getQty()`, `setQty()`
    -  Por fim, escreve uma classe principal que instancie um livro (`Book`), e imprima o nome do autor através da instância de `Book`.*/


    class Author {
    #name;
    #email;
    #birthdate;
    
        constructor(name, email, birthdate){
            this.#name = name;
            this.#email = email;
            this.#birthdate = birthdate;
        }
     
     
     get Name(){
        return `Seu nome é ${this.#name}`
     
     }
     
     get Email(){
       return `Email cadastrado ${this.#email}`
     
    }
    get Birthdate(){
       return `Sua data de nascimento é ${this.#birthdate}`
    
    }
    
    set Name(newName){
     this.#name = newName
     
     }
     set Email(newEmail){
        this.#email = newEmail
    
    }
    set Birthdate(newBirthdate){
       this.#birthdate = newBirthdate 
    
      }
      
   }
    
    
    module.exports = Author;
    
    
    const bookstore = new Author('Artemiza', 'rocha@2210.com.br', '10/10/2022')
    
  
    
   