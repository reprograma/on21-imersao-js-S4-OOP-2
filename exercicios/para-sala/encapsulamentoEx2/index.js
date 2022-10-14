import { User } from './classUser.js';
//import Autor from './classAuthor.js';

const userEli = new User("Eliane", "eliAlmeida", "elialmeida@email.com", "125D&3")

console.log(userEli.login("elialmeida@email.com", "12587"))
console.log(userEli.login("elial@email.com", "125D&3"))
console.log(userEli.login("elialmeida@email.com", "125D&3"))
userEli.password = 'senha alterada'
console.log(userEli.password)