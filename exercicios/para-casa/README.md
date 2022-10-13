# Exercício de Casa 🏠 

## Nome do Exercicio

- Explicação do exercício: 
[Escreva uma classe chamada Author, uma classe que representa um autor de livros.

Essa classe contém:

Três atributos privados: nameAuthor (String), email (String), e birthdate (Date ou DateTime);
Um método construtor que inicialize nameAuthor, email e birthdate com os valores passados;
class Author(nameAuthor, email) {......}

Métodos de acesso público (getter/setter) para cada um dos atributos;

Escreva também uma classe chamada Book, essa classe contém:

Quatro variáveis privadas: nameBook (String), isbn (String), author (Author, assuma que o livro só tem um único autor), price (double), e qty (int);

class Book extends Author{ constructor(nameAuthor, nameBook, isbn, price, qty){ super(name) this.nameBook = nameBook; this.isbn = isbn; this.price = price; this.qty = qty; } }

- Métodos acessores: `getName()`, `getISBN()`, `getAuthor()`, `getPrice()`, `setPrice()`, `getQty()`, `setQty()`
-  Por fim, escreve uma classe principal que instancie um livro (`Book`), e imprima o nome do autor através da instância de `Book`.
- 
---] 
---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [X] Fiz o fork do repositório.
- [X] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [X] Criei minha branch (` git checkout -b nome-sobrenome `)
- [X] Criei a pasta com o meu nome dentro da pasta entregas (` mkdir nome-sobrenome`)
- [X] Resolvi o exercício dentro da minha pasta. Como no [exemplo](/on21-imersao-js-S1-TDD/exercicios/para-casa/entregas/exemplo-nome-sobrenome/).
- [X] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [X] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [X] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [X] Criei um Pull Request seguindo as orientações que estao nesse [documento](/on21-imersao-js-S1-TDD/exercicios/para-casa/instrucoes-pull-request.md).