var simplegalApp = angular.module('simplegalApp', []);

simplegalApp.controller('galCtrl', function($scope) {
    $scope.date = '2015-04-17';
    
    $scope.getDate = function() {
	return $scope.date;
    };
});
