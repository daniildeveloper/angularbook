'use strict';

angular.module('myApp.wishlist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wishlist', {
    templateUrl: 'wishlist/wishlist.html',
    controller: 'SiteController'
  });
}])

.controller('SiteController', function ($scope) {

})
.controller("BookController", function ($scope) {
    $scope.books = [
        "Jump Start to Html5",
        "Jump Start to CSS",
        "Jump start responsive design"
    ];
    $scope.name = "Scope for BookController";
    $scope.addToWishList = function(book) {
        $scope.wishListCount++;
    }
    $scope.wishListCount = 0;
    $scope.$watch("wishListCount", function(newValue, oldValue) {
        console.log("Called " + newValue + " times");
        if (newValue == 2) {
            console.log("You have 2 items in wishlist!")
        }
    })
})
;