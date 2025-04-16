class Carro{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar (){
        console.log(`O carro ${this.marca} ${this.modelo} está ligado`);
    }
    acelerar (){
        console.log("Acelerando...");
    }
}

const meuCarro = new Carro("Chevrolet", "Corsa");

meuCarro.ligar();
meuCarro.acelerar();