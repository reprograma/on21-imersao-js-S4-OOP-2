class User {
    email;
    name;
    #password;

    constructor() {}
    signUp(email, name, password) {
        let isValidateEmail = false;
        isValidateEmail = this.#validateEmail(email);

        if (isValidateEmail) {
            this.email = email;
            this.name = name;
            this.#password = password;
            console.log('Usuário cadastrado com sucesso');
        }
        else {
            console.log('A conta não foi criada');
        }
    }
    
    #validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/; // expressão regular para validar email contem @ e .
        if(emailRegex.test(email)){
            console.log('Email valido');
            return true;
        }
        else {
            console.log('Email invalido');
        }
     
    }
    
    get password() {
        return this.#password;
    }
    set password(newPassword) {
        this.#password = newPassword;
    }
}

const user = new User('ana@ana', 'ana', '123456');
user.signUp('ana@ana.com', 'ana', '123456');

module.exports = User;