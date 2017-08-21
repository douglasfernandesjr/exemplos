var app = angular.module('AngularApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/AngularApp/home/view.html"
    });

    $routeProvider.when("/orders", {
        controller: "ordersController",
        templateUrl: "/AngularApp/orders/view.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});

