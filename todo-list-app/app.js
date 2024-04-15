angular.module('toDoApp', [])
.controller('toDoCtrl', function($scope) {
    $scope.tasks = [];

    $scope.addTask = function(event) {
        if (event.which === 13 && $scope.newTask.trim() !== '') {
            $scope.tasks.push({ name: $scope.newTask.trim() });
            $scope.newTask = '';
        }
    };

    $scope.removeTask = function(task) {
        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index, 1);
    };
});
