var greeting = angular.module("myApp.greeting", [])
    .controller("GreetingController", function ($scope) {
        $scope.now = new Date();
        $scope.greeting = "Hello";//set model name on scope

        $scope.helloMessage = ["Hello", "Bonjur", "Hola", "Ciao", "Hallo"];

        $scope.getRandomHelloMessage = function () {
            $scope.greeting = $scope.helloMessage[parseInt((Math.random() * $scope.helloMessage.length))];
        }
    });

greeting.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/greeting', {
        templateUrl: 'greeting/greeting.html',
        controller: 'GreetingController'
    });
}])