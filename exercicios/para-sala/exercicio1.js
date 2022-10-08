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
        }
    }

    setPassword(newPassword){
        this.senha = newPassword
        return `Senha alterada`
    }

    getEmail(){
        return `o seu email cadastrado é ${this.email}`
    }


}

const userJessi = new User('Jéssica', 'osko_jess', 'oskojess@gmail.com', 'senha123#');
console.log((userJessi));

console.log(userJessi.login("oskojess@gmail.com", "senha123#")) // senha certa
console.log(userJessi.login("oskojess@gmail.com", "senha1#")) // senha errada

console.log(userJessi.setPassword('123456'));
console.log((userJessi));

console.log((userJessi.getEmail()))