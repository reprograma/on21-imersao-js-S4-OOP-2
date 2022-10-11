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
    constructor(name,userName,email,password){
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    login(email, password){
        if(email === this.email &&  password === this.password){
            return `Login realizado com sucesso`
        }else{
            return `Autenticacao falhou / Autentication failed`
        }
    }

    setPassword(newPassword){
        this.password = newPassword;
        return `Senha Alterada`
    }

    getEmail(){
        return `o seu email cadastrado é ${this.email}`
    }
}

const userJaque = new User('Jaqueline', 'amarajaque', 'jaqueshanti@gmail.com', 'senha123')
console.log(userJaque);

console.log(userJaque.login('jaqueshanti@gmail.com', 'senha123'))
console.log(userJaque.setPassword('senhanova'))

console.log(userJaque);