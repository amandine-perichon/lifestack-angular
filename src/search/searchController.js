export default function($scope, $http, $routeParams, $location) {
  $scope.id = $routeParams.id

  $scope.selectedCategory = "Cooking"
  $scope.selectedDifficulty = "easy"
  $scope.selectedSkill = null

  $http.get('http://localhost:3000/v1/skills')
    .then(function(response) {
      $scope.categories = response.data.data
        .map(elem => elem.category)
        .filter((elem, i, ar) => ar.indexOf(elem) === i)

      $scope.difficulties = response.data.data
        .map(elem => elem.difficulty)
        .filter((elem, i, ar) => ar.indexOf(elem) === i)

      $scope.skills = response.data.data
  })

  // $scope.$watch('skills', function () {
  //   console.log($scope.skills)
  // })

  $http.get(`http://localhost:3000/v1/skills/${$scope.selectedSkill? $scope.selectedSkill.id : $scope.id}`)
    .then(function(response) {
      $scope.searchVideos = response.data.data.videos
    })
}
