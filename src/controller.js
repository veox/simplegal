var simplegalApp = angular.module('simplegalApp', []);

simplegalApp.controller('galCtrl', ['$scope', function($scope) {
    $scope.date = new Date(Date.UTC(2014, 11, 31)); // hack to disregard timezone
    $scope.image = getImagePath($scope.date);

    function getImagePath(date) {
	var image = 'img' + '/' + date.getFullYear() + '/' + (date.getMonth()+1) + '/' +
	    + date.getFullYear() + (date.getMonth()+1) + date.getDate() + '.jpeg';
	return image;
    };

    $scope.updatePage = function() {
	$scope.image = getImagePath($scope.date);
    }
}]);
