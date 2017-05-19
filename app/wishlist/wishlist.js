'use strict';

var ex = angular.module('myApp.wishlist', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wishlist', {
            templateUrl: 'wishlist/wishlist.html',
            controller: 'MessageController'
        });
    }]);

ex.controller("MessageController", function ($scope, $timeout) {
    $scope.messages = [
        {
            sender: 'user1',
            text: "Message 1"
        }
    ];

    var timer;
    var count = 0;

    $scope.loadMessages = function () {
        count++;
        $scope.messages.push({
            sender: "user1",
            text: "Random message " + count
        });

        timer = $timeout($scope.loadMessages, 2000);

        if (count === 3) {
            $scope.$broadcast("EVENT_NO_DATA", "Not connected");
            $timeout.cancel(timer);
        }
        timer = $timeout($scope.loadMessages, 2000);

        $scope.on("EVENT_RECIVED", function () {
            console.log("Recived emmited event");
        });
    }
});

ex.service("helloService", function() {
    this.sayHello = function() {//define instance method
        console.log("Hello!");
    }
});