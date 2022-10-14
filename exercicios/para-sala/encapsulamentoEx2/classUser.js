/**
 * Dando continuidade ao exercicio 1, o atibuto senha não pode ser mais retornada quando criarmos 
 * um novo objeto a partir de User. Precisamos refatorar nosso código
 * - publico - public - this.name
 * - privado - private - #
 * - protegido protected - _
*/

export class User {

    #password;
    #email;

    constructor(name, userName, email, password) { // todos os atributos dentro do constructor é publico
        this.name = name;
        this.userName = userName;
        this.#email = email;
        this.#password = password;
    }

    login(email, password) {
        if(email !== this.#email || password !== this.#password) {
            return "Falha ao tentar login: O e-mail ou a senha esta incorreto"
        } 
        return "Login realizado com sucesso"
    }

    get password() {
        return this.#password
    }

    set password(newPassword) {
        this.#password = newPassword
    }

    get email(){
        return this.#email;
    }
    
}




