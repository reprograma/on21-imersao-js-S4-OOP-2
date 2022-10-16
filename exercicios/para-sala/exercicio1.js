<<<<<<< HEAD
/*Crie uma classe chamada User com os atributos: - nome; - username; - email; - senha; Crie os seguintes metódos com as suas regras: - login: para logar precisa do email e senha e verificar se o email e senha estão corretos, se estiverem, retornar uma mensagem de login realizado, senão, falha no login; - alterar senha: possibilidade de trocar a senha atual por uma senha nova. */ 

export class User{
    constructor(nome, username, email, senha){
        this.nome = nome;
        this.username = username;
        this.email = email;
        this.senha = senha;
    }

    login(email, senha){
        if(email === this.email && senha === this.senha){
            return `Login realizado com sucesso`;
        } else {
            return `Autenticação falhou`;
=======
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
>>>>>>> main
        }
    }

    setPassword(newPassword){
<<<<<<< HEAD
        this.senha = newPassword
=======
        this.password = newPassword;

>>>>>>> main
        return `Senha alterada`
    }

    getEmail(){
        return `o seu email cadastrado é ${this.email}`
    }
<<<<<<< HEAD


}

const userJessi = new User('Jéssica', 'osko_jess', 'oskojess@gmail.com', 'senha123#');
console.log((userJessi));

console.log(userJessi.login("oskojess@gmail.com", "senha123#")) // senha certa
console.log(userJessi.login("oskojess@gmail.com", "senha1#")) // senha errada

console.log(userJessi.setPassword('123456'));
console.log((userJessi));

console.log((userJessi.getEmail()))
=======
}


const userJessi = new User('Jéssica', 'osko_jess', 'oskojess@gmail.com', 'senha123#');
console.log(userJessi);

console.log(userJessi.login('oskojess@gmail.com', 'senha123#'))
console.log(userJessi.setPassword('senhanova'))

console.log(userJessi.password);



>>>>>>> main
