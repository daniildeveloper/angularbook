var greeting = angular.module("myApp.greeting", [])
.controller("GreetingController", function($scope) {
    $scope.now = new Date();
    $scope.greeting = "Hello";//set model name on scope
});

greeting.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/greeting', {
      templateUrl: 'greeting/greeting.html',
      controller: 'GreetingController'
    });
  }])