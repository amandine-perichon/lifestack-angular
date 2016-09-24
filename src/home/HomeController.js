export default function($scope, $http) {
  $http.get('http://localhost:3000/v1/skills/top3')
    .then(function(response) {
      $scope.topvideos = response.data.data
    })
}
