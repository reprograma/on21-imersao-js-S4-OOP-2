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
    constructor(name, username, email, password){
        this.name = name,
        this.username = username,
        this.email = email,
        this.password = password
    }

    login(email, password) {
        if(email === this.email && password === this.password){
            return `Login efetuado com sucesso`
        }
        else {
            return `ERROR! Falha no login`
        }
    }

    setNewSenha(newPassword) {
        this.password === newPassword
        return `Senha alterada com sucesso`
    }

    getEmail() {
        return `O email encontrado foi ${this.email}`;
    }
}

const user1 = new User('Bárbara', 'babipereira', 'babi@gmail.com', 123);
console.log(user1);
console.log(user1.login('babi@gmail.com', 1213));
console.log(user1.setNewSenha(456));
console.log(user1.getEmail());