/* Crie os seguintes métodos com as suas regras:
 -nome;
- username;
- email;
- senha;

- login: para logar precisa do email e senha e verificar se o email e senha estão corretos, se estiverem, retornar uma mensagem de login realizado,
senão, falha no login;
- alterar senha: possibilidade de trocar a senha atual por uma senha nova.
*/

class User {
    constructor(name, userName, email, senha) {
        this.name = name,
        this.userName = userName,
        this.email = email,
        this.senha = senha
    }

   getEmail() {
    return this.email
   }

   getSenha() {
    return this.senha
   }

   getEmail() {
    return this.email
   }

   login(email, senha) {
        if (email === this.getEmail() && senha === this.getSenha()){
            console.log('Login realizado com sucesso');
        } else {
            console.log('falha de login, verifique seu email ou senha');
        }
    }

    setSenha(novaSenha){
        this.novaSenha === novaSenha
        return 'sua senha foi alterada'
    }
    
}

const user = new User('Raissa', 'raissaBarata', 'raissa@gmail.com', '1234$')

console.log(user);

console.log(user.login('raissaa@gmail.com', '1234$'));
console.log('correto',user.login('raissa@gmail.com', '1234$'));

