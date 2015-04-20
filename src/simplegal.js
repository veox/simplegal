var simplegalApp = angular.module('simplegalApp', []);

simplegalApp.directive('errSrc', function() {
    return {
	link: function(scope, element, attrs) {
	    element.bind('error', function() {
		if (attrs.src != attrs.errSrc) {
		    attrs.$set('src', attrs.errSrc);
		}
	    });
	}
    }
});

simplegalApp.controller('galCtrl', ['$scope', function($scope) {
    // double date hack to disregard timezone
    $scope.date = new Date(Date.UTC(2014, 11, 31));
    $scope.image = getImagePath($scope.date, 0);
    // FIXME: iter
    $scope.image1 = getImagePath($scope.date, 1);
    $scope.image2 = getImagePath($scope.date, 2);
    $scope.image3 = getImagePath($scope.date, 3);
    $scope.image4 = getImagePath($scope.date, 4);
    $scope.image404 = 'img/404.jpeg';
    $scope.blank = 'img/blank.png';

    function getImagePath(date, nth) {
	date = date.toISOString();
	date = date.split("T")[0];
	date = date.split("-");
	var y = date[0];
	var m = date[1];
	var d = date[2];

	var n = '';
	if (nth > 0) {
	    n = '-' + nth;
	}
	
	var image = 'img' + '/' + y + '/' + m + '/' +
	    + y + m + d + n + '.jpeg';
	return image;
    };

    function changeDate(days) {
	$scope.date.setUTCDate($scope.date.getUTCDate() + days);
	$scope.updatePage();
    }
    $scope.changeDate = function(days) {
	changeDate(days);
    }
    
    $scope.updatePage = function() {
	// TODO: sanitise input
	// TODO: check if image exists
	// hack to update input text if button is pressed
	$scope.date = new Date($scope.date);
	$scope.image = getImagePath($scope.date, 0);
	// FIXME: iter
	$scope.image1 = getImagePath($scope.date, 1);
	$scope.image2 = getImagePath($scope.date, 2);
	$scope.image3 = getImagePath($scope.date, 3);
	$scope.image4 = getImagePath($scope.date, 4);
    }
}]);
