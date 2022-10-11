/* crie uma classe chamada user com os atributos:
-nome; 
- username; 
- email;
- password;

Crie os seguintes metódos com as suas regras: 

-login: para logar, precisa do email e senha e verificar o 
email e senha estão corretor, retoruma uma mensagem dizendo login realizado, se não falhar o login.
-alterar senha: possibilidade de trocar a senha aual para a uma senha nova
*/


class User {
    constructor(nome, username, email, password) {
        this.nome = nome;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    login(email, password) {
        const verifyEmail = email === this.email;
        const verifyPassword = password === this.password;
        const validationLogin = verifyEmail && verifyPassword ? 'Login realizado' : 'Falha no login';

        return validationLogin;
    }

    alterarSenha(password) {
        this.password = password;
    }
}

const user = new User("Ana", "ana-bana", "ana@ana", "123456");
console.log(user.login("ana@ana", "123456"));
user.alterarSenha("1234567");
console.log(user.login("ana@ana", "1234567"));