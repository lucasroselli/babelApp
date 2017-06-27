//classe cliente
export class Cliente  {
    constructor(nome, sobrenome,idade ) {
        this.Nome = nome;
        this.Sobrenome = sobrenome;
        this.Idade = idade;
    }

    NomeCompleto() {
        return this.Nome + ' ' + this.Sobrenome + ' e Idade: ' + this.Idade;
    }
}