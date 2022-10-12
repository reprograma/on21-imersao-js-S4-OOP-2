/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. 

convenções de segurança da oop:
- publico publico - this.name
- privado private - # 
- protegido protected - _*/



class User {
    
    #password;
 
    constructor(name, userName, email, password){
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.#password = password;

    }
    login(email, password){
        if(email === this.email && password === this.#password){
           return `Login realizado com sucesso/Login successfully`
        } else{
        return `Autenticação falhou / Authentication failed`
        }
    }


set password(newPassword){
    this.#password = newPassword

    return `senha alterada`

}

get password(){
return this.#password
}


set password(newPassword){
     this.#password = newPassword
}

}

const UserMiza = new User(" Artemiza", "iza_rocha", "iza4@gmail.com", "senha152#")

UserMiza.password = 'senhaalterada';
console.log(UserMiza.password)
console.log(UserMiza)