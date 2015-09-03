angular.module('ModelApp',[])
.controller('mainCtrl',['$scope' ,function($scope){
  $scope.title = "Hello, World";
  $scope.description = "If you are reading it, it's working."
}]);