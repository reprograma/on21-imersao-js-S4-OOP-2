const User = require('./UsercomAbst.js');
class Admin extends User{
    constructor(email, password){
        super(email, password)
    }

    login(email, password){
        let isAdmin = true;
        if(email === this.email && password === this.password && isAdmin ){
            return `Login realizado com sucesso/Login successfully`
         } else{
         return `Autenticação falhou / Authentication failed`
         }
    }
}


const newAdmin = new Admin();
console.log(newAdmin.signUp('Jess','oskojess@gmail.com', 'senha'))
console.log(newAdmin.login('oskojess@gmail.com', 'senha'))

