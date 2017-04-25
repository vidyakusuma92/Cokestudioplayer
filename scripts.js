var app = angular.module('sureify', []);

app.controller('indexCtrl',['$scope','$http', function ($scope,$http) {

  $http.get('http://starlord.hackerearth.com/sureify/cokestudio')
    .then(function(response) {
      $scope.songs = response.data;

      console.log($scope.songs);
    },function (error) {
        console.log(error);
    }

  )

}])
