const Admin = require("./Admin.js");
const Author = require("./Author.js");

const newAdmin = new Admin("admin@email.com", "12345");
console.log(newAdmin.login(newAdmin.email, newAdmin.senha));

const newAuthor = new Author("author@email.com", "12345");
console.log(newAuthor.login(newAuthor.email, newAuthor.senha));
