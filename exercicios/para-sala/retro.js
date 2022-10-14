class Pessoa{
    constructor(nome, idade, endereco)
    {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
    }
}

class Aluna extends Pessoa{
    constructor(nome, idade, endereco, turma, anoletivo){
        super(nome, idade, endereco)
        this.turma = turma;
        this.anoletivo = anoletivo;
    }
}

class Professora extends Pessoa{
    constructor(nome, idade, endereco, turmas , disciplina){
        super(nome, idade, endereco)
        this.turma = turma;
        this.disciplina = disciplina;
    }
}

const createAluna = new Aluna('Anna',23,'Monte Lindo', 'B6' , 'Portugues');
console.log(createAluna)
