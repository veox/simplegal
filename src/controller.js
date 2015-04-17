var simplegalApp = angular.module('simplegalApp', []);

simplegalApp.controller('galCtrl', ['$scope', function($scope) {
    $scope.date = new Date (2014, 11, 31);
    $scope.image = getImagePath($scope.date);
    
    function getImagePath(date) {
	//var d = $scope.date | date: "yyyy-MM-dd";
	var image = 'img' + '/' + date.getFullYear() + '/' + (date.getMonth()+1) + '/' +
	    + date.getFullYear() + (date.getMonth()+1) + date.getDate() + '.jpeg';
	return image;
    };

    $scope.updateImage = function() {
	$scope.image = getImagePath($scope.date);
    }
}]);
