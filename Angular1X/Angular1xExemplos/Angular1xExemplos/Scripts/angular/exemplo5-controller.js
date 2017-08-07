'use strict'
var app = angular.module('exemploApp', []);

app.directive('renderUsuario1', function () {
	return {
		restrict: 'AECM',
		replace: true,
		templateUrl: '/Content/templates/UserLayout.html'
	};
});

app.directive('renderUsuario2', function () {
	return {
		restrict: 'E',
		scope: false,
		template: '<h3>{{usuario.nome}}</h3><h4>{{usuario.cidade }}</h4><input ng-model="usuario.nome">'
	};
});

app.directive('renderUsuario3', function () {
	return {
		restrict: 'E',
		scope: {
			usr: '='
		},
		templateUrl: '/Content/templates/UserLayout3.html'
	};
});

app.directive('renderUsuario4', function () {
	return {
		restrict: 'E',
		scope: {
			usr: '=usuario',
			img: '@',
			click: '&'
		},
		templateUrl: '/Content/templates/UserLayout4.html'
	};
});

var Exemplo5Controller = function ($scope) {

	$scope.funcaoParaClicar = function (frase) { alert(frase) };


	$scope.usuario = {};
	$scope.usuario.imagem = "/Content/img/generic-user.png";
	$scope.usuario.nome = "Douglas";
	$scope.usuario.cidade = "Mogi das Cruzes";

	$scope.usuario2 = {};
	$scope.usuario2.imagem = "/Content/img/generic-user.png";
	$scope.usuario2.nome = "Fernando";
	$scope.usuario2.cidade = "Sorocaba";
}
Exemplo5Controller.$inject = ['$scope'];

app.controller('Exemplo5Controller', Exemplo5Controller);