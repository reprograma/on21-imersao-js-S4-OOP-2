/* - Classes: 
Uma classe é representada por uma Entidade -> É representação de um objeto com as suas propriedades.
*/


class Pessoa {
    constructor(nome, idade, endereço){
        this.name = nome;
        this.age = idade;
        this.address = endereço;
    }

    getName(){
        return this.name;
    }
}
class Aluna extends Pessoa {

    //o construtor é um inicializador onde inserimos atributos que queremos que a class seja instânciada
    //com esses valores. 

    constructor(turma, anoLetivo, nome, idade, endereço){
        super(nome, idade, endereço)
        this.turma = turma;
        this.anoLetivo = anoLetivo;
    }

    //Podemos criar n métodos para
    // a classe Aluna MAS terá apenas UM construtor pois ele é o inicializador dos valores que teríamos que passar AO CRIAR um objeto.

}

class Professora extends Pessoa{
    constructor(nome, idade, endereco, turmas, disciplina){
    super(nome, idade, endereco)

    this.turmas = turmas;
    this.disciplina = disciplina;
    }
}


const createAluna1 = new Aluna("B", "6 ANO", "Maria", "16", "Avenida X");
console.log(createAluna1.getName())

// Modificadores de acesso:

// - 4 Pilares
 // Herança: Reutilizar dados. 
 //- Encapsulamento: Ocultar o máximo possível da nossa implementação (Classes, Heranças) e para alcançar um   
 //- Abstração
// - Polimorfismo
