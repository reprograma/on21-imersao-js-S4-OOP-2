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
    constructor(name, username, email , password){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    login(email, password){
        if(email === this.email && password === this.password){
            return "Login successfully"; 
        } else{
            return "Authentication failed";
        }
    }

    changePassword(newPassword){
       this.password = newPassword;

       return "Change password successfully"
    }
}

const userEvelin = new User("evelin", "evelinUne", "evelinune@email.com", "2233425");
console.log(userEvelin);
console.log(userEvelin.login("evelinune@email.com", "2233425"));
console.log(userEvelin.changePassword("1234#"));