publico public
privado private = #
protegido protected

class User {
   
    constructor(nome, username, email, senha) {
      this.nome = nome;
      this.username = username;
      this.email = email;
      this. #senha = senha;
    }

    getSenha(){
return this.#senha
    }

    login(email, senha) {
      if (email === this.senha && senha && this.getSenha) {
        console.log("login realizado com sucesso");
      } else {
        console.log("email ou senha incorretos");
      }
    }
    setTrocaSenha(novaSenha) {
      this.#senha = novaSenha;
      return `Senha alterada com sucesso`;
    }
  
    getEmail() {
      return `o seu email cadastrado é ${this.email}`;
    }
  }
  
  const userMabia = new User(
    "mabia",
    "mabiaaa",
    "duartecostap@gmail.com",
    "senha123"
  );
  console.log(userMabia);
  console.log(userMabia.login("duartecostap@", "senha123#"));
  console.log(userMabia.setTrocaSenha("senha nova"));
  console.log(userMabia);
  