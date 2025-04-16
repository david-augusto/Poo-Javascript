class ContaBancaria{
    #saldo = 0; //propriedade privada

    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            console.log(`Deposito de ${valor} feito com sucesso`);
        }else{
            console.log("Valor Inválido");
        }
    }

    consultarSaldo(){
        console.log(`O saldo atual é: ${this.#saldo}`);
    }
}

const conta = new ContaBancaria();
conta.depositar(1000);
conta.consultarSaldo();