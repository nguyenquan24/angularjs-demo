var mainApp = angular.module('mainApp', []);

mainApp.controller('mainController', function ($scope) {
    $scope.name = 'Quan';
    $scope.dateTemp = moment(new Date()).format("YYYY-MM-DDT00:00:00") + "Z";
});