class DateHelper {

    constructor(){
        throw new Error('Essa classe não precisa ser instanciada');
    }

    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato AAAA-MM-DD');

        return new Date(texto.split('-'));
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;  // --> interpolação

        //return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();   // --> concatenate
    }
}

//FUNCTIONS & PARAMETER TYPES
//let data = new Date(this._data.val().split('-')); --> send array as parameter
//let data = new Date(...this._data.val().split('-').map(function (item, indice) { return (indice == 1) ? item - 1 : item })); --> "..." for each parameter | ".map" -> flux by each item in an array
//let data = new Date(...this._data.val().split('-').map(function (item, indice) { return item - indice % 2 })); --> w/o if
//let data = new Date(...this._data.val().split('-').map((item, indice) => { return item - indice % 2 }));  --> arrow function
//let data = new Date(...this._data.val().split('-').map((item, indice) => item - indice % 2 )); // --> only one instruction
