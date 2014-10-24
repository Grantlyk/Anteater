var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all todos and show them
	$http.get('/api/bugs')
		.success(function(data) {
			$scope.bugs = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createBug = function() {
		$http.post('/api/bugs', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.bugs = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a todo after checking it
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
