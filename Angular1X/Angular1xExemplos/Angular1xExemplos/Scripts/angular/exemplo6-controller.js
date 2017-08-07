'use strict'
var app = angular.module('exemploApp', []);

app.directive('renderUsuario5', function () {

	var controllerInterno = function ($scope) {
		$scope.outravariavel = "informação adicional"
	};

	controllerInterno.$inject = ['$scope'];

	return {
		restrict: 'E',
		scope: {
			usr: '='
		},
		templateUrl: '/Content/templates/UserLayout5.html',
		controller: controllerInterno
	};
});



app.directive('renderUsuario6', function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			usr: '='
		},
		templateUrl: '/Content/templates/UserLayout6.html'
	};
});

function clicarForaDiretiva($document) {

	var postLink = function (scope, element, attrs) {
		var onClick = function (event) {
			var isChild = element[0].contains(event.target);
			var isSelf = element[0] === event.target;
			var isInside = isChild || isSelf;
			if (!isInside) {
				scope.$apply(function () {
					scope.$eval(attrs.clicarFora);
				});
			}
		};
		$document.bind('click', onClick);
	};

	return {
		restrict: 'A',
		link: postLink
	};
};

clicarForaDiretiva.$inject = ['$document']

app.directive('clicarFora', clicarForaDiretiva );



app.directive('onEnter', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if (event.which === 13) {
				scope.$apply(function () {
					scope.$eval(attrs.onEnter);
				});
				event.preventDefault();
			}
		});
	};
});


var Exemplo6Controller = function ($scope) {
	$scope.usuario = {};
	$scope.usuario.imagem = "/Content/img/generic-user.png";
	$scope.usuario.nome = "Douglas";
	$scope.usuario.cidade = "Mogi das Cruzes";

	$scope.ClickEnter = function () { alert("Ação com o Enter"); };

	$scope.ClickFora = function () { alert("Ação de clicar fora!"); };
}
Exemplo6Controller.$inject = ['$scope'];

app.controller('Exemplo6Controller', Exemplo6Controller);