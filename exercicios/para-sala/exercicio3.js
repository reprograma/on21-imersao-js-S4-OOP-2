/* Crie uma classe chamada Author que estenderá de User as informações de nome e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos métodos, um para criar o post  e o 
o outro obter o número de post criados. 

Observação: Criaremos a implementação da adição do post e da  Quantidade do Post;*/


class User {
    
    #password;
   
 
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
        return this.#password
        }
        
        
        set password(newPassword){
            return this.#password = newPassword
        }
        
        }

        class Author extends User {
            post
            #numPost
          
            
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
             return `Author posts: ${this.post}`
             }
            
            }
        
        
        const izauser1 = new Author('miza', 'rocha_22', 'izarocha@gmail.com', 'senha#1110')
        
 
        console.log(izauser1.numPost)
        console.log(izauser1.post)
            