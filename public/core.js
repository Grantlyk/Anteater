var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	$http.get('/api/bugs')
		.success(function(data) {
			$scope.bugs = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});


	$scope.createBug = function() {
		$http.post('/api/bugs', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; 
				$scope.bugs = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	
	$scope.deleteBug = function(id) {
		$http.delete('/api/bugs/' + id)
			.success(function(data) {
				$scope.bugs = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}
