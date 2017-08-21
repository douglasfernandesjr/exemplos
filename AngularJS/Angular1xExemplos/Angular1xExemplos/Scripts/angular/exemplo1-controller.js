'use strict'
var app = angular.module('exemploApp', []);

var Exemplo1Controller = function ($scope) {
	$scope.nome = 'Douglas';
}
Exemplo1Controller.$inject = ['$scope'];

app.controller('Exemplo1Controller', Exemplo1Controller);