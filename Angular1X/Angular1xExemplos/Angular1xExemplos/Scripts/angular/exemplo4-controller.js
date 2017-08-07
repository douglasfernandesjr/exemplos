'use strict'
var app = angular.module('exemploApp', []);

var Exemplo4Controller = function ($scope) {
	$scope.usuario = {};
	$scope.usuario.imagem = "/Content/img/generic-user.png";
	$scope.usuario.nome = "Douglas";
	$scope.usuario.cidade = "Mogi das Cruzes";
}
Exemplo4Controller.$inject = ['$scope'];

app.controller('Exemplo4Controller', Exemplo4Controller);