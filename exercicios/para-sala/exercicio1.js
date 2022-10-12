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
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.password = password;

    }
    login(email, password){
        if(email === this.email && password === this.password){
           return `Login realizado com sucesso/Login successfully`
        } else{
        return `Autenticação falhou / Authentication failed`
        }
    }


setPassword(newPassword){
    this.password = newPassword

    return `senha alterada`

}
getEmail(){
    return `seu email cadastrado é ${this.email}`

}

}

const UserMiza = new User(" Artemiza", "iza_rocha", "iza4@gmail.com", "senha152#")

console.log(UserMiza);

console.log(UserMiza.login('iza4@gmail.com', 'senha152#'))
console.log(UserMiza.setPassword('senhanova'))

console.log(UserMiza);