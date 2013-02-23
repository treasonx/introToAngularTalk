(function() {

  var mod = angular.module('neverDos', []);

  mod.controller('list', function($scope) {

    $scope.todos = [
      'Eat Pencils',
      'Cross the street without looking',
      'Support IE6'
    ];

    $scope.add = function() {
      this.todos.push(this.newDo);
      this.newDo = '';
    };

    $scope.remove = function(idx) {
      this.todos.splice(idx, 1);
    };

  });

}());
