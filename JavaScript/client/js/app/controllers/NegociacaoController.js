class NegociacaoController {

    constructor() {
        this._data = $('#data');
        this._quantidade = $('#data');
        this._valor = $('#data');
    }

    adiciona(event) {
        event.preventDefault();

        let negociacao = new Negociacao(this._data.val(), this._quantidade.val(), this._valor.val());
        console.log(negociacao);
    }
}
