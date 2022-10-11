/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. */

//  convenções de segurança 
// -public
// -private # não acessa e não visualiza
// - protected _ não acessa, mas visualiza

// getMetodo #setMetodo - métodos que criamos

//  get e set são acessores e  modificaoores
//  get acessa metodos privados acessa a propriedade 

// get = acessa
// set = modifica


class User {

    #password;
    email;
    //  paramatrizar os valores que seram privados

    constructor(name,userName,email,password){
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.#password = password;
        // não acessa a senha - método privado
    }

    login(email, password){
        if(email === this.email &&  password === this.#password){
            return `Login realizado com sucesso`
        }else{
            return `Autenticacao falhou / Autentication failed`
        }
    }

    get password(){
        return this.#password 
    }
    //  acessa

    set password(newPassword){
        this.#password = newPassword;
    }
    //seta o valor da propriedade

    getEmail(){
        
    }

    
}

const userJaque = new User('Jaqueline', 'amarajaque', 'jaqueshanti@gmail.com', 'senha123')
console.log(userJaque.password)
userJaque.password = 'senhaalterada'

console.log(userJaque.password)


// console.log(userJaque);

// console.log(userJaque.login('jaqueshanti@gmail.com', 'senha123'))
// console.log(userJaque.setPassword('senhanova'))
// console.log(userJaque.setPassword('senha12345'))
// console.log(userJaque.getPassword());

// console.log(userJaque)

