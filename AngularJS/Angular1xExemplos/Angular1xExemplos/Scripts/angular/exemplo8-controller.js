'use strict'
var app = angular.module('exemploApp', []);


app.directive('campoData', function () {
	return {
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			ngModel.$parsers.push(function (value) {
				if (!moment(value, 'DD/MM/YYYY').isValid()) {
					ngModel.$setValidity('data', false);
					return;
				}
				ngModel.$setValidity('data', true);
				console.log(moment(value).format('DD/MM/YYYY'));
				return moment(value, 'DD/MM/YYYY').toDate();
			});

			ngModel.$formatters.push(function (value) {
				if (!moment(value).isValid()) {
					ngModel.$setValidity('data', false);
					return;
				}
				ngModel.$setValidity('data', true);
				return moment(value).format('DD/MM/YYYY');
			});
		}
	};
});

app.directive('numeroImpar', function () {
	return {
		require: 'ngModel',
		link: function (scope, element, attr, ngModelctrl) {
			ngModelctrl.$validators.numeroImpar = function (modelValue, viewValue) {
				if (viewValue % 2 === 1) {
					return true;
				}
				return false;
			}
		}
	}
});




app.directive('nomeUnico', function ($http, $q) {
	return {
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			ngModel.$asyncValidators.nomeUnico = function (modelValue, viewValue) {
				var value = modelValue || viewValue;

				return $http.post('/ajax/nomeExiste', { nome: value })
					.then(
					function (response) {
						if (response.data.existe) {
							return $q.reject();
						}
						return true;
					}
					);
			};
		}
	};
});



var Exemplo8Controller = function ($scope, $http) {
	$scope.data = new Date();


	$scope.objeto = {
		id: 1, nome: "Nome", cidade: "City", idade: 23, pessoas: []
	};

	$scope.objeto.pessoas.push({ nome: "Douglas", sobrenome: "Fernandes", idade: 27, cidade: "Mogi das Cruzes" });
	$scope.objeto.pessoas.push({ nome: "José", sobrenome: "da Silva", idade: 56, cidade: "Campinas" });
	$scope.objeto.pessoas.push({ nome: "Carlos", sobrenome: "Alberto", idade: 18, cidade: "Piracicaba" });
	$scope.objeto.pessoas.push({ nome: "Jéssica", sobrenome: "Santos", idade: 30, cidade: "Suzano" });

	$http.post("/ajax/postComplexo", $scope.objeto).then(
		function (response) {
			console.log(response);
		});

}
Exemplo8Controller.$inject = ['$scope','$http'];

app.controller('Exemplo8Controller', Exemplo8Controller);