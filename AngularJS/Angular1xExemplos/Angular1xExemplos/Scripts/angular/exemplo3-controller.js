'use strict'
var app = angular.module('exemploApp', []);

app.filter('DinheiroBR', function () {
	return function (numero) {
		return "R$" + numero.toLocaleString();
	}
});

var Exemplo3Controller = function ($scope) {
	$scope.dataHoje = new Date();
	$scope.dinheiro = 1234.34;
	$scope.mensagem = "mensagem em capslock"
}
Exemplo3Controller.$inject = ['$scope'];

app.controller('Exemplo3Controller', Exemplo3Controller);