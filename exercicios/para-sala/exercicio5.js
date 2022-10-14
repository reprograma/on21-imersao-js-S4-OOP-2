/**Polimorfismo */
class User{
    
    email;
    name;
    #password; 

    constructor(){}

    signUp(name, email, password){
        let isValidated = false;
        isValidated = this.#validateEmail(email);

        if(isValidated){
            this.name = name;
            this.email = email;
            this.#password = password;
            console.log('Usuário criado com sucesso')
        } else {
            console.log('Autenticação falhou')
        }
    }

    #validateEmail(email){
        let regex =  new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        
        if(regex.test(email)){
            console.log("Email validado")
            return true
        } else{
            console.log("Email incorreto")
        }
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

}

class Admin extends User{
    constructor(email, password){
        super(email, password);
    }

    login(email, password){
        const isAdmin = true;
        if(email === this.email && password === this.password && isAdmin){
            return  `Login efetuado para Admin`;
        } 
        else{
            return `Falha no login`
        }
    }
}

const admin = new Admin('Bárbara', 'admin@gmail.com', 123);
console.log(admin.login('Bárbara', 'admin@gmail.com', 123));