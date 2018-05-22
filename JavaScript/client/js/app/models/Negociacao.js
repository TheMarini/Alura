class Negociacao{
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }
    
    get data(){
        return new Date(this._data.getTime());  //getTime -> seed   | cada vez pedido cria-se uma nova instância cópia da original (constructor)
    }
    
    get quantidade(){
        return this._quantidade;
    }
    
    get valor(){
        return this._valor;
    }
    
    get volume(){
        return this._quantidade * this._valor;
    }
}