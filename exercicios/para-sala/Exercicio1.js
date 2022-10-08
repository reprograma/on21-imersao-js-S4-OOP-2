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
    constructor(name, username, email, password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    login(email, password) {
        if(email !== this.email || password !== this.password) {
            return "Falha ao tentar login: O e-mail ou a senha esta incorreto"
        } 
        return "Login realizado com sucesso"
    }

    setPassword(password) {
        const newPassword = password;
        if(password === this.password) {
            return "A nova senha é igual a senha atual"
        }
        this.password = newPassword

        return "Senha alterada com sucesso"
    }

    getEmail(){
        return  
    }
    
}

const userEli = new User("Eliane", "eliAlmeida", "elialmeida@email.com", "125D&3")

console.log(userEli.login("elialmeida@email.com", "12587"))
console.log(userEli.login("elial@email.com", "125D&3"))
console.log(userEli.login("elialmeida@email.com", "125D&3"))
console.log(userEli.setPassword("125D&3"))
console.log(userEli.setPassword("128D&3"))
console.log(userEli)