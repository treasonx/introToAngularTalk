(function(angular) {
  'use strict';

  var mod = angular.module('inheritance', []);

  mod.controller('mawmawCtrl', function($scope) {
    $scope.name = '';
  });

  mod.controller('childCtrl', function() {});

}(this.angular));
