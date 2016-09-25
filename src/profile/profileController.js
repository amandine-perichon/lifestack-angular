export default function($scope, $location, $http, $routeParams) {
  $scope.id = $routeParams.id
  $http.get(`http://localhost:3000/v1/users/${$scope.id}`)
    .then(function(response) {
      $scope.user = response.data.data
      $scope.levelXpStyle = {
        width: "400 px"
      }
      $scope.remainingXPWidth = String((100 - $scope.user.remainingXp) / 100 * $scope.widthInPx)
      $scope.totalXpStyle = {
        width: $scope.remainingXPWidth + "px"
      }
    })

  $scope.randomSkill = function () {
    $http.get(`http://localhost:3000/v1/users/${$scope.id}/random`)
    .then(function(response) {
      $scope.random = response.data.data
    })
  }
  
  $scope.randomSkill()
}
