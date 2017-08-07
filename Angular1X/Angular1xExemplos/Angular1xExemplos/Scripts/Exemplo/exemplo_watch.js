app.directive('exemplo', function () {
	return {
		link: function (scope, element, attrs) {
			attrs.$observe('attrN', function () { });
		}
	};
});

var ExemploController = function ($scope) {
	$scope.$watch('variavel', function () { });
	$scope.$watchGroup('a != b', function () { }); 
	$scope.$watchCollection('variavelArray', function () { }); 
}