const user = require("./User");

const user1 = new user(
  "Fernanda",
  "Fer001",
  "fernandasoares@email.com",
  "12345"
);

console.log(user1.login("email_errado@email.com", "12345"));
console.log(user1.login("fernandasoares@email.com", "12345"));
console.log(`Senha atual: ${user1.senha}`);
console.log(user1.alteraSenha("senha_errada", "00000"));
console.log(user1.alteraSenha("12345", "00000"));
