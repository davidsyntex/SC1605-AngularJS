"use strict";
var app = angular.module("AJS", []);

var item = {
    name: "Coca-Cola Zero",
    price: 12.90,
    description:"Cola utan socker och kalorier, innehåller i princip ingenting."
}

app.controller("StoreController", function($scope, $interval) {
    $scope.product = item;
    $scope.isVisible = false;
    $scope.header = "";
    $scope.menu = "home";
    $scope.timer = 10;

    $scope.showText = function() {
        $scope.isVisible = !$scope.isVisible;
    };

    $scope.reverseText = function (text) {
        return text.split("").reverse().join("");
    };

    $scope.showPage = function(page) {
        $scope.menu = page;
    };

    var decreaseCountDown = function() {
        if ($scope.timer <= 1) {
            $scope.stopCountDown();
        }
        $scope.timer--;
    };

    var intervalTimer;

    $scope.startCountDown = function() {
        $scope.timer = 10;
        intervalTimer = $interval(decreaseCountDown, 1000);
    };

    $scope.stopCountDown = function() {
        $interval.cancel(intervalTimer);
        intervalTimer = undefined;
    };

});