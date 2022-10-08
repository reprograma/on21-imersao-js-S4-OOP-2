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


class  User{
    #senha
    constructor(name, username, email, senha){
        this.name = name,
        this.username = username,
        this.email = email,
        this.#senha = senha
    }

    login(email, senha){
        if(senha === this.#senha && email === this.email){
           return 'Login efetuado com sucesso'
        }else{
          return 'Não foi possivel efetuar o login'
        }
    }

    get senha(){
        return this.#senha

    }

    set senha(newSenha){
        this.#senha = newSenha
        return  'Senha alterada'
    }
}


const userMione = new User('Hermione', 'mione123', 'mioneg@hotmail.com', '123456')

console.log(userMione.login('mioneg@hotmail.com', '13456'))
console.log(userMione)
module.exports = User()