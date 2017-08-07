'use strict'
var app = angular.module('exemploApp', []);


app.provider('localTemplate', function () {
	this.templateUrl = '/Content/templates';

	this.SetTemplateUrl = function (value) {
		this.templateUrl = value;
	};

	this.GetFullUrl = function (fileName) {
		fileName = fileName.trim();
		if (fileName.charAt(0) !== '/')
			fileName = '/' + fileName;

		return this.templateUrl + fileName;
	};

	this.$get = function () {
		return this;
	};
});

function localAjax($http) {
	this.CommonSharedErrorFunction = function (response) {
		console.log(response);
		alert("aconteceu um erro")
	};
	this.ExecutarGet = function (_url, callBack, errorCallBack) {
		var localErroCallBack = errorCallBack;
		$http.get(_url).then(
			callBack,
			function (response) {
				if (typeof localErroCallBack === "function") {
					try {
						localErroCallBack();
					} catch (ex) {
						console.log(ex);
					}
				}
				__this.CommonSharedErrorFunction(response);
			});
	};
};
localAjax.$inject = ['$http'];
app.service('localAjaxService', localAjax);

app.factory('pessoaFactory', function () {
	return function (nome, sobrenome, idade, cidade) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
		this.cidade = cidade;
	};
});


app.config(['localTemplateProvider', function (localTemplateProvider) {
	localTemplateProvider.SetTemplateUrl("/Content/templatesAlternativos"); //Define em que pasta está os templates da aplicação
}]);

var Exemplo7Controller = function ($scope, localAjaxService, pessoaFactory, localTemplate) {

	$scope.template = localTemplate.GetFullUrl('tabela.html');

	$scope.Lista = [];
	$scope.Lista.push(new pessoaFactory("Douglas", "Fernandes", 27, "Mogi das Cruzes"));
	$scope.Lista.push(new pessoaFactory("José", "da Silva", 12, "Campinas"));
	$scope.Lista.push(new pessoaFactory("Carlos", "Alberto", 32, "Piracicaba"));
	$scope.Lista.push(new pessoaFactory("Jéssica", "Santos", 45, "Suzano"));


	$scope.CarregarAjax = function () {
		localAjaxService.ExecutarGet("/Ajax/Pessoas",
			function success(response) { $scope.Lista = response.data; });
	};
}
Exemplo7Controller.$inject = ['$scope', 'localAjaxService', 'pessoaFactory', 'localTemplate'];

app.controller('Exemplo7Controller', Exemplo7Controller);