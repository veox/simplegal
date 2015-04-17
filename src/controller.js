var simplegalApp = angular.module('simplegalApp', []);

simplegalApp.controller('galCtrl', ['$scope', function($scope) {
    $scope.date = new Date(Date.UTC(2014, 11, 31)); // hack to disregard timezone
    $scope.image = getImagePath($scope.date);

    function getImagePath(date) {
	date = date.toISOString();
	date = date.split("T")[0];
	date = date.split("-");
	var y = date[0];
	var m = date[1];
	var d = date[2];
	var image = 'img' + '/' + y + '/' + m + '/' +
	    + y + m + d + '.jpeg';
	return image;
    };

    $scope.updatePage = function() {
	$scope.image = getImagePath($scope.date);
    }
}]);
