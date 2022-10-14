/* Abstração é como você começará a deixar apenas parte da sua implementação "exposta"
e ocultar o que for interno daquela classe 
    - criar um signup() criação de uma nova conta
    - criar um login (acessar a conta)
    - criar um método que valida o e-mail ao criar uma conta (dentro do método signup())
*/

class User {
  email;
  name;
  #password;
  constructor() {}

  signUp(name, email, password) {
    let isEmailValid = false;

    isEmailValid = this.#validateEmail(email);

    if (isEmailValid) {
      this.name = name;
      this.email = email;
      this.#password = password;
      console.log("User criado com sucesso =)");
    } else {
      console.log(
        "A conta não foi criada. Por gentileza, verificar as informações inseridas."
      );
    }
  }

  #validateEmail(email) {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (regex.test(email)) {
      console.log("E-mail correto");
      return true;
    } else {
      console.log("E-mail incorreto");
    }
  }

  login(email, password) {
    if (email === this.email && password === this.#password) {
      console.log(`Login realizado com sucesso/Login successfully`);
    } else {
      console.log(`Autenticação falhou / Authentication failed`);
    }
  }

  get password() {
    return this.#password;
  }

  set password(newPassword) {
    this.#password = newPassword;
  }
}

const createClaudia = new User();
createClaudia.login("claudiamary.santos@gmail.com", "1234");
createClaudia.signUp("Cláudia", "claudiamary.santos@gmail.com", "1234");
console.log(createClaudia.name);
console.log(createClaudia.email);
console.log(createClaudia.password);
createClaudia.login("claudiamary.santos@gmail.com", "1234");
