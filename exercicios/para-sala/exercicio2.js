
/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos um novo objeto a partir de User. Precisamos refatorar nosso código. 
================================================ 
******* Convenções de segurança da oop: ********
================================================

- público public - this.name 
- privado private  - this.#name (cerquilha)
- protegido protected  - this._name (underline)
*/


class User{
    
    #password; //referência ao atributo que vou receber e será privado
    email;

    constructor(name, username, email, password){
        this.name = name,
        this.username = username,
        this.email = email,
        this.#password = password //por ser privado, não aparece na hora de imprimir o obj criado
    }

    login(email, password){
        if(email === this.email && password === this.#password){
            return `Login efetuado com sucesso`
        }
        else{
            return `ERROR! Falha no login`
        }
    }

    set password(newPassword){
        this.#password = newPassword
        return `Senha alterada com sucesso`
    }

    get email(){
        return `O email encontrado foi ${this.email}`;
    }

   // getPassword(){ return this.#password } -> método recebe um parâmetro e por isso imprimiu a senha

}

const user1 = new User('Bárbara', 'babipereira', 'babi@gmail.com', 123);
console.log(user1);
console.log(user1.login('babi@gmail.com', 123));
console.log(user1.password = 456);
//console.log(user1.getPassword());
console.log(user1.email);

module.exports = User