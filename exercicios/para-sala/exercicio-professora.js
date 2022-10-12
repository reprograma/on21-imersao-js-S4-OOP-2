class User { 
    #password; 
    email; 
    constructor(name, userName, email, password){ 
        this.name = name; 
        this.userName = userName; 
        this.email = email; this.#password = password; 
    } 
    login(email, password){ 
        if(email === this.email && password === this.#password){ 
            return `Login realizado com sucesso/Login successfully` } 
        else{ 
            return `Autenticação falhou / Authentication failed` } 
        } 
        
    get password(){ 
        return this.#password; 
    } 
    set password(newPassword){ 
        this.#password = newPassword; } 
        
    getEmail(){} 
    } 