'use strict';

angular.module('myApp.view1', ['rzModule', 'ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.slider = {
            value: 36,
            options: {
                floor: 6,
                ceil: 72
            }
        };
        $scope.calc = {
            principal: 12500,
            interestRate: 5,
            months: 36
        };
        $scope.monthlyPayments = 0;
        $scope.calculate = function () {
            var x = $scope.calc;
            var interestMonth = x.interestRate / 100 /12;
            $scope.monthlyPayments = x.principal * interestMonth *
                Math.pow((1 + interestMonth), $scope.slider.value) /
                ( Math.pow((1 + interestMonth), $scope.slider.value) - 1);
        }
    }
    ]);