class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);

    }

    get volume() {

        return this._quantidade * this._valor;
    
    }

    getData() {
        return this._data;
    }
    
    getQuantidade() {
        return this._quantidade;
    }
    
    getValor() {
        return this._valor;
    }
}