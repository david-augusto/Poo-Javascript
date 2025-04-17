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

class Pessoa{

    constructor(auxNome, auxEndereco){
        this.nome = auxNome;
        this.endereco = auxEndereco;
    }

    getNome(){ return this.nome;}
    getEndereco(){ return this.endereco;}
    setNome(auxNome){ this.nome = auxNome;}
    setEndereco(auxEndereco){this.endereco = auxEndereco;}
}

class PessoaFisica extends Pessoa{
    constructor(auxNome,auxEndereco, auxCPF, auxDataNascimento){
        super(auxNome, auxEndereco);
        this.CPF = auxCPF;
        this.DataNascimento = auxDataNascimento;
    }
    getCPF(){return this.CPF;}
    getDataNascimento(){return this.DataNascimento;}
    setCPF(auxCPF){this.CPF = auxCPF;}
    setDataNacimento(auxDataNascimento){this.DataNascimento = auxDataNascimento;}
}

class PessoaJuridica extends Pessoa{
    constructor(auxNome, auxEndereco, auxCNPJ, auxRazaoSocial){
        super(auxNome, auxEndereco);
        this.CNPJ = auxCNPJ;
        this.RazaoSocial = auxRazaoSocial
    }
    getCNPJ(){return this.CNPJ;}
    getRazaoSocial(){return this.RazaoSocial;}
    setCNPJ(auxCNPJ){this.CNPJ = auxCNPJ;}
    setRazaoSocial(auxRazaoSocial){this.RazaoSocial = auxRazaoSocial;}
}


var p1 = new PessoaFisica("David", "Centro");
console.log(p1.getNome());
console.log(p1.getEndereco());
var p2 = new PessoaFisica("Augusto", "Sede");
console.log(p2.getNome());
console.log(p2.getEndereco());

var jur1 = new PessoaJuridica("Senai", "Rua UM", "1234", "Servico");
console.log(jur1.getNome());
console.log(jur1.getCNPJ());