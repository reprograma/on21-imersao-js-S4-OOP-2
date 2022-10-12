const User = require("../exercicio5/User.js");

module.exports = class Admin extends User {
  constructor(email, senha) {
    super(email, senha);
  }

  login(email, senha) {
    let isAdmin = true;
    if (email === this.email && senha === this.senha && isAdmin)
      return "Login do admin realizado!";

    return "Falha no login do admin!";
  }
};
