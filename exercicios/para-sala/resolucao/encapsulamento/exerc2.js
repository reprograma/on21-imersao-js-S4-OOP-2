/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. */  



/* crie uma classe chamada user com os atributos:
-nome; 
- username; 
- email;
- password;

Crie os seguintes métodos com as suas regras: 

-login: para logar, precisa do email e senha e verificar o 
email e senha estão corretor, retor uma uma mensagem dizendo login realizado, se não falhar o login.
-alterar senha: possibilidade de trocar a senha atual para a uma senha nova

public - this.name
private - this.#name
protected - this._name
*/


class User {

    #password;
    constructor(nome, username, email, password) {
        this.nome = nome;
        this.username = username;
        this.email = email;
        this.password = password;
    }

     login(email, password) {
        const verifyEmail = email === this.email;
        const verifyPassword = password === this.#password;
        const validationLogin = verifyEmail && verifyPassword ? 'Login realizado' : 'Falha no login';

        return validationLogin;
    }

    get pegarSenha() {
        return this.#password
    }

    set alterarSenha(password) {
        return this.#password = password + "senha alterada com sucesso"; // set serve para trazer as propriedades privadas
    }
}

const user = new User("Ana", "ana-bana", "ana@ana", "123456");
console.log(user.login("ana@ana", "123456"));
user.alterarSenha("1234567");
console.log(user.login("ana@ana", "1234567"));