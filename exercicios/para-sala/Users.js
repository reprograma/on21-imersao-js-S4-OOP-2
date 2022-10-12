class User{
    email;
    name;
    #password;

    constructor (){}

    signUp(nome, username, email, password)
    {
        let isValidateEmail = false;
        isValidateEmail = this.#validateEmail(email);
    }

    #validateEmail(email){

    }

    Login(email,senha)
    {
        if (this.email === email && this.senha === senha)
        {
            return `Login realizado com sucesso`;
        }
        else
        {
            return `Login ou senha inválidos`;
        }
    }
    Senha(senha)
    {
        this.senha = senha;
        return `Senha atualizada com sucesso`;
    }
    getSenha()
    {
        return `A senha é ${this.senha}`
    }

    getEmail()
    {
        return `O email é ${this.email}`
    }
}