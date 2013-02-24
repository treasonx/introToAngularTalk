(function(angular, setTimeout) {
  'use strict';

  var mod = angular.module('digest', []);

  mod.controller('clock', function($scope) {

    var tickTimeout = 1000;

    function scheduleTick() {
      setTimeout(tick, tickTimeout);
    }

    function tick() {
      $scope.time = new Date().toLocaleTimeString();
      console.log($scope.time);
      scheduleTick();
    };

    tick();

  });

}(this.angular, this.setTimeout));
