import User from './exerc4.js'

class Admin extends User {
    constructor(email, password) {
        super(email, password)
    }

    login(email, password){
        let isAdmin = true; 
        if (email === this.email && password === this.password && isAdmin) {
            console.log('Login realizado com sucesso');
        }else {
            console.log('Login não realizado');
        }
}}

const admin = new Admin('line@gmail.com', '123456');
console.log(admin.login('line@gmail.com', '123456'));