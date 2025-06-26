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

const hero = new Hero(nome, idade, tipo) 


hero.atacar()