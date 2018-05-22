class NegociacaoController {

    constructor() {
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        //FUNCTIONS & PARAMETER TYPES
        //let data = new Date(this._data.val().split('-')); --> send array as parameter
        //let data = new Date(...this._data.val().split('-').map(function (item, indice) { return (indice == 1) ? item - 1 : item })); --> "..." for each parameter | ".map" -> flux by each item in an array
        //let data = new Date(...this._data.val().split('-').map(function (item, indice) { return item - indice % 2 })); --> w/o if
        //let data = new Date(...this._data.val().split('-').map((item, indice) => { return item - indice % 2 }));  --> arrow function
        //let data = new Date(...this._data.val().split('-').map((item, indice) => item - indice % 2 )); // --> only one instruction

        let data = new Date(this._data.val().split('-'));

        let negociacao = new Negociacao(data, this._quantidade.val(), this._valor.val());
        console.log(negociacao);
    }
}
