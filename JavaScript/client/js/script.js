/* globals $ */

$(function () {
    let negociacaoController = new NegociacaoController();
    
    $('form').on('submit', function (event) {
        negociacaoController.adiciona(event);
    });
});
