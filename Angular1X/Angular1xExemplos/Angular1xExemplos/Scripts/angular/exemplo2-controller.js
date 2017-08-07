'use strict'
var app = angular.module('exemploApp', []);

function Exemplo2Controller($scope, $http) {

	$scope.Lista = [];
	$scope.Lista.push({ nome: "Douglas", sobrenome: "Fernandes", idade: 27, cidade: "Mogi das Cruzes" });
	$scope.Lista.push({ nome: "José", sobrenome: "da Silva", idade: 56, cidade: "Campinas" });
	$scope.Lista.push({ nome: "Carlos", sobrenome: "Alberto", idade: 18, cidade: "Piracicaba" });
	$scope.Lista.push({ nome: "Jéssica", sobrenome: "Santos", idade: 30, cidade: "Suzano" });

	$scope.CarregarAjax = function () {
		$http.get("/Ajax/Pessoas").then(
			function success(response) { $scope.Lista = response.data; },
			function error(response) { alert("aconteceu um erro!!!") }
		);
	};

	$scope.Add = function (formCtrl) {
		if (formCtrl.$valid) {
			$scope.Lista.push({ nome: $scope.form.nome, sobrenome: $scope.form.sobrenome, idade: $scope.form.idade, cidade: $scope.form.cidade });
			$scope.form = {};
		}
	};

};

Exemplo2Controller.$inject = ['$scope', '$http'];

app.controller('Exemplo2Controller', Exemplo2Controller);