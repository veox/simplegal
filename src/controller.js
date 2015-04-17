var simplegalApp = angular.module('simplegalApp', []);

simplegalApp.controller('galCtrl', function($scope) {
    $scope.date = '2014-12-31';
    $scope.image = getImagePath($scope.date);
    
    function getImagePath(date) {
	date = date.split("-"); // ['year', 'month', 'day']
	var image = 'img' + '/' + date[0] + '/' + date[1] + '/' +
	    + date[0] + date[1] + date[2] + '.jpeg';
	return image;
    };

    $scope.updateImage = function() {
	$scope.image = getImagePath($scope.date);
    }
});
