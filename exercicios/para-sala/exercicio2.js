/* Encapsulamento...
Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código.

public - this.name
private - #
protected - _

*/

class User {
    #password;
    email;

    constructor(name, username, email , password){
        this.name = name;
        this.username = username;
        this.email = email;
        this.#password = password;
    }

    login(email, password){
        if(email === this.email && password === this.#password){
            return "Login successfully"; 
        } else{
            return "Authentication failed";
        }
    }
    //getter e setter
    set password(newPassword){
       this.#password = newPassword;

       return "Change password successfully"
    }

    get password(){
        return this.#password;
    }
}

const userEvelin = new User("evelin", "evelinUne", "evelinune@email.com", "2233425");

userEvelin.password = 'senhaalterada'

console.log(userEvelin);