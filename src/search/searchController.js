export default function($scope, $http) {
  $http.get('http://localhost:3000/v1/skills')
    .then(function(response) {
      $scope.selectedCategory = null
      $scope.selectedDifficulty = null

      $scope.categories = response.data.data
        .map(elem => elem.category)
        .filter((elem, i, ar) => ar.indexOf(elem) === i)

      $scope.difficulties = response.data.data
        .map(elem => elem.difficulty)
        .filter((elem, i, ar) => ar.indexOf(elem) === i)

      $scope.skills = response.data.data
      .filter(elem => {
                      if ($scope.selectedCategory !== null ) {
                        return elem.category === $scope.selectedCategory
                      } else {
                        return elem
                      }
                    })
                    .filter(elem => {
                      if ($scope.selectedDifficulty !== null ) {
                        return elem.difficulty === $scope.selectedDifficulty
                      } else {
                        return elem
                      }
                    })

    console.log($scope.selectedDifficulty, $scope.selectedCategory)
    })

  $http.get('http://localhost:3000/v1/skills/104')
    .then(function(response) {
      $scope.searchVideos = response.data.data.videos
    })
}
