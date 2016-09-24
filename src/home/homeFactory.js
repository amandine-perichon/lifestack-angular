app.factory('topvideos', ['$http', function($http) {
  return $http.get('localhost:3000/topvideos')
            .success(function(data) {
              return data
            })
            .error(function(err) {
              return err
            })
}])
