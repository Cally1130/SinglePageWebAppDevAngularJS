(function () {
    'use strict';

    angular.module('MyFirstApp', [])

    .controller('MyFirstController', function($scope) {
        $scope.name = "Hahaha";
        $scope.sayHello = function() {
            return "Hello Hi!"
        };  
    });

}) (); 