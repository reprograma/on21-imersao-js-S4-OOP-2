/*  ABSTRAÇÃO = é como você começará a deixar apenas parte da sua implementação "exposta" e ocultar o que for interno daquela classe

-criar um signup()(criação de nova conta);
-criar um login()(acessar a conta);
-criar um método que valida o email ao criar uma conta (dentro do método signup());

*/


class User {
  email;
  name;
  #password;

  constructor(){}

  signup(name, email, password) {
    let isValidated = false;
    isValidated = this.#validateEmail(email)

    if (isValidated) {
      this.name = name;
      this.email = email;
      this.#password = password;
      console.log("User criado com suceso.")
    } else {
      console.log("A conta não foi criada. Por gentileza, verificar as informações inseridas.")
    }
  }

  #validateEmail(email) {}

  login(email, password) {
    if(email === this.email && password === this.#password) {
      return `Login realizado com sucesso/ Login successfully`
    } else {
      return `Autenticação falhou/ Authentication failed`
    }
  }

  get password() {
    return this.#password
  }

  setPassword(newPassword) {
    this.#password = newPassword;
    return `Senha aterada`
  }

  get email() {
    return this.#email
  }
}