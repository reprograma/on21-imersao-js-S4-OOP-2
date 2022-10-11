<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 21 - Imersão JavaScript | Semana 4 | 2022 | Professora Jéssica Osko

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
* [Add outras intrucoes caso necessario]

### Objetivo

Apresentar novos conceitos dos quatro pilares do paradigma orientado a objetos, focando em exemplos de aplicações reais, compartilhando padronizações e comportamentos na Linguagem de Programação Javascript. 

### Resumo
O que veremos na aula de hoje?
- [Tema da Aula](#tema-da-aula)
    - [Instruções](#instruções)
    - [Objetivo](#objetivo)
    - [Resumo](#resumo)
- [Pilares do Paradigma Orientado a Objetos](#pilares-do-paradigma-orientado-a-objetos)
  - [4 Pilares](#4-pilares)
      - [O que são e para que servem](#o-que-são-e-para-que-servem)
      - [Herança](#herança)
      - [Encapsulamento](#encapsulamento)
      - [Abstração](#abstração)
      - [Polimorfismo](#polimorfismo)
    - [Exercícios](#exercícios)
    - [Material da aula](#material-da-aula)
    - [Links Úteis](#links-úteis)

- [Modificadores de acesso](#conteúdo)

  - [Exemplo](#exemplo)
    - [O que são e para que servem ](#o-que-são-e-para-que-servem)
    - [Benefícios](#benefícios)
    - [Abordagens](#abordagens)
    - [Implementação](#implementação)
  
  - [Exercícios](#exercícios)
  - [Material da aula](#material-da-aula)
  - [Links Úteis](#links-úteis)

# Pilares do Paradigma Orientado a Objetos

## 4 Pilares  
  #### O que são e para que servem
 
* Herança: classes filhas herdam dados e comportamentos da classe mãe;
* Encapsulamento: contém informações em um objeto, expondo apenas as informações selecionadas;
* Abstração: apenas expondo métodos públicos de alto nível para acessar um objeto;
* Polimorfismo: muitos métodos podem fazer a mesma tarefa; 

  #### Herança
A herança permite que as classes herdem características de outras classes.
As classes mãe estendem atributos e comportamentos para classes filhas.
A herança suporta a reutilização. 

Os benefícios da herança são que os programas podem criar uma classe mãe genérica e,
em seguida, criar classes filhas mais específicas, conforme necessário.
Isso simplifica a programação geral, porque em vez de recriar a estrutura da Userclasse várias vezes, as classes filhas obtêm acesso automaticamente às funcionalidades de sua classe pai.

  #### Encapsulamento
 
O encapsulamento é um dos fundamentos da programação orientada a objetos.
Refere-se ao agrupamento de dados com os métodos que operam nesses dados.
O encapsulamento é usado para ocultar os valores ou o estado de um objeto de dados
estruturados dentro de uma classe, a fim de impedir que partes não autorizadas tenham acesso
direto a eles.

Esse conceito também é frequentemente usado para ocultar a representação interna,
ou estado, de um objeto do lado de fora.
A ideia geral por trás desse mecanismo é simples.
Se você tiver um atributo que não é visível do lado de fora de um objeto e agrupá-lo com
métodos que fornecem acesso de leitura ou gravação a ele,
poderá ocultar informações específicas e controlar o acesso ao estado interno do objeto.

No encapsulamento, o objetivo é ocultar o máximo possível de implementação,
colocando-os todos em um único objeto e, em seguida, exibindo uma interface mínima.
A interface exibida pode então ser usada sem a necessidade de saber como foi implementada.
Em essência, você sabe que a interface resolve um problema específico ou executa um problema específico,
mas não precisa conhecer os detalhes de como ela o resolve.

Existem diferentes tipos de métodos usados ​​no encapsulamento de dados em JavaScript,
cada um com seu próprio nível de encapsulamento.

*O método prefix:* Este é mais como uma convenção, consiste em usar um sublinhado (_)
antes do nome de uma classe para passar uma mensagem de que a classe é privada 
e não deve ser adulterada. No entanto, é apenas um indicativo de que aquele nome com o sublinhado seria uma propridade ou escopo privado. 

*O método getter e setter:* Os métodos getter e setter são usados ​​no encapsulamento de dados.
Um método getter obtém um atributo, enquanto um método setter o altera.
Dependendo do método usado, você pode decidir se um atributo pode ser lido e alterado ou
se deve ser somente leitura. Se alguém decidir que um atributo não deve ser alterado, 
pode optar por torná-lo somente leitura, sem opção de definir o valor.

*Escopos de função:* As variáveis ​​definidas dentro das funções ficam ocultas de qualquer
código fora dela. Ele não pode ser acessado ou alterado de fora da função,
portanto, protegendo-o contra adulteração injustificada.
Com este conceito, você pode encapsular variáveis ​​e removê-las do escopo global
e proteger seus dados.

Todos os métodos acima mostram que uma função não deve ser endereçada diretamente
ou impedem que a função seja acessada. Eles têm vários níveis de encapsulamento e
devem ser usados ​​de acordo com o quão rigoroso você deseja que o acesso aos dados 
em seu programa seja.

  #### Abstração
  [CONTEUDO]

  #### Polimorfismo
  [CONTEUDO]
  
***
### Exercícios 
* [Exercicio para sala](/exercicios/para-sala/)
* [Exercicio para casa](/exercicios/para-casa/)

### Material da aula 
* [Material](/material)

### Links Úteis
* 

<p align="center">
Desenvolvido com :purple_heart:  
</p>

