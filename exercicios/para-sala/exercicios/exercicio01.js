/*Crie uma classe chamada User com os atributos:
- nome;
- username;
- email;
- senha;

Crie os seguintes metódos com as suas regras:

- login: para logar precisa do email e senha e verificar se o email e senha estão corretos, se estiverem, retornar uma mensagem de login realizado,
senão, falha no login;
- alterar senha: possibilidade de trocar a senha atual por uma senha nova.
*/


class User {
    constructor(name, userName, email, password){
        this.nome = name;
        this.username = userName;
        this.email = email;
        this.senha = password;
    }

    login(email, password){
        if(email === this.email && password === this.password){
            return`Login Realizado!`
        } else{
           return `Email e senha não estão corretos`
        }
    }

    setPassword(novaSenha){
        this.senha = novaSenha
        return `Sua senha foi alterada!`;

    }

}

const novoUser = new User('Gabriela', 'Gabi', 'gabi@gmail.com', 'senha123')
console.log(novoUser)

console.log(novoUser.login('gabi@gmail', 'senha123'))

console.log(novoUser.setPassword('novaSenha123'))