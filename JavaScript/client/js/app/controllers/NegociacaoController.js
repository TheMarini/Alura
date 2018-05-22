class NegociacaoController {

    constructor() {
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let negociacao = new Negociacao(DateHelper.textoParaData(this._data.val()), this._quantidade.val(), this._valor.val());
        console.log(negociacao);

        console.log(DateHelper.dataParaTexto(negociacao._data));
    }
}
