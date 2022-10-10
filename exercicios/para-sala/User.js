/*Crie uma classe chamada User com os atributos:
- nome;
- username;
- email;
- senha;

Crie os seguintes métodos com as suas regras:

- login: para logar precisa do email e senha e verificar se o email e senha estão corretos, se estiverem, retornar uma mensagem de login realizado,
senão, falha no login;
- alterar senha: possibilidade de trocar a senha atual por uma senha nova.
*/

class User{
    constructor (nome, username, email, senha){
        this.nome = nome;
        this.username = username;
        this.email = email;
        this.senha = senha;
    }
    Login(email,senha)
    {
        if (this.email === email && this.senha === senha)
        {
            return `Login realizado com sucesso`;
        }
        else
        {
            return `Login ou senha inválidos`;
        }
    }
    Senha(senha)
    {
        this.senha = senha;
        return `Senha atualizada com sucesso`;
    }
    getSenha()
    {
        return `A senha é ${this.senha}`
    }

    getEmail()
    {
        return `O email é ${this.email}`
    }
}

const Usuario = new User('Anna Maria', 'annymary' ,'anna@gmail.com', '12345')

console.log(Usuario.Login('anna@gmail.com', '12345'))
console.log(Usuario)
console.log (Usuario.getSenha())
console.log(Usuario.Senha('teste'))
console.log (Usuario.getSenha())
console.log(Usuario.getEmail())
console.log(Usuario.Login('anna@gmail.com1', '12345'))

