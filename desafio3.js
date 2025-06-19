class Hero {
   constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
   };

   atacar() {
    if (this.tipo === "Mago") {
        return console.log(`O ${this.tipo} atacou usando magia!`);
    }
    else if (this.tipo === "Guerreiro") {
        return console.log(`O ${this.tipo} atacou usando espada!`);
    } 
    else if (this.tipo === "Monge") {
        return console.log(`O ${this.tipo} usando artes marciais!`);
    }
    else if (this.tipo === "Ninja") {
        return console.log(`O ${this.tipo} atacou usando usando kunai!`);
    };
   };
};

function addHero(nome, idade, tipo) {
const hero = new Hero(nome, idade, tipo)
return hero;
};

const guerreiro1 = addHero("Mateus", 23, "Mago");
guerreiro1.atacar();

const guerreiro2 = addHero("Lais", 22, "Ninja");
guerreiro2.atacar();