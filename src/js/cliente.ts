

export interface ICliente {
    Nome: string,
    Sobrenome: String,
    Idade: number,

    NomeCompleto(): string
}
//classe cliente
export class Cliente implements ICliente {
    Nome: string;
    Sobrenome: string;
    Idade: number;

    constructor(nome: string, sobrenome: string,idade : number) {
        this.Nome = nome;
        this.Sobrenome = sobrenome;
        this.Idade = idade;
    }

    NomeCompleto() {
        return this.Nome + ' ' + this.Sobrenome + ' Idade: ' + this.Idade;
    }
}