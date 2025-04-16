class Animal{
    constructor(nome){
        this.nome = nome;
    }

    fazerSom(){
        console.log(this.nome, "Fez um som");
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log(this.nome, "Latiu");
    }
}

class Gato extends Animal{
    fazerSom(){
        console.log(this.nome, "Miou");
    }
}

const Douglinhas = new Cachorro("Douglinhas");
const Pandora = new Gato("Pandora");


const amimais = [Douglinhas, Pandora];
amimais.forEach(animal => {
    animal.fazerSom();
});