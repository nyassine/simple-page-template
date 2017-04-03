angular.module('myApp', []).
  controller('AlienController', ['$scope', function($scope) {

    $scope.yesAnswer=false;
    $scope.noAnswer=false;
    $scope.no = function() {
       $scope.yesAnswer=false;
       $scope.noAnswer=true;

    };
    

    $scope.yes = function() {
      $scope.noAnswer=false;
      $scope.yesAnswer=true;
    };
    
  }]);
