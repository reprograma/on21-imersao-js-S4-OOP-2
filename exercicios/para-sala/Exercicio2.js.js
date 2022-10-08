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

    constructor(name, username, email, password) { // todos os atributos dentro do constructor é publico
        this.name = name;
        this.username = username;
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

class Author extends User {

    #numPost

    constructor(email, password, post) {
        super(email, password)

        this.#numPost = 0;

    }

    islogged() {
        //...
    }

    createPost(post) {
        this.#post++;
    }

    get numPost() {
        return this.createPost()
    }

const userEli = new User("Eliane", "eliAlmeida", "elialmeida@email.com", "125D&3")

console.log(userEli.login("elialmeida@email.com", "12587"))
console.log(userEli.login("elial@email.com", "125D&3"))
console.log(userEli.login("elialmeida@email.com", "125D&3"))
userEli.password = 'senha alterada'
console.log(userEli.password)

