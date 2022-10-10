/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. 
Utilizamos # para proteger o atributo
*/


class User{
    #senha;
    email;

    constructor (nome, username, email, senha){
        this.nome = nome;
        this.username = username;
        this.email = email;
        this.#senha = senha;
    }
    
    Login(email,senha)
    {
        if (this.email === email && this.#senha === senha)
        {
            return `Login realizado com sucesso`;
        }
        else
        {
            return `Login ou senha inválidos`;
        }
    }
    set senha(senha)
    {
        return this.#senha = senha;
     }
    get senha()
    {
        return this.#senha;
    }
    get email()
    {
        return this.email;
    }
   
}


module.exports = User ;

 const Usuario = new User('Anna Maria', 'annymary' ,'anna@gmail.com', '12345')


