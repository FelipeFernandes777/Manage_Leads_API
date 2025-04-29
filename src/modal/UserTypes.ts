
export class UserTypes {
    private readonly _nome_completo: string
    private readonly _telefone: string

    constructor(nome: string, telefone: string) {
        this._nome_completo = nome;
        this._telefone = telefone;
    }

    get nome_completo(): string {
        return this._nome_completo;
    }

    get telefone(): string {
        return this._telefone;
    }

    public returnData():UserTypes {
        return this;
    }
}