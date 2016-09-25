export default function($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl : './src/home/home.tmpl.html',
          controller  : 'homeController'
      })
      .when('/search', {
          templateUrl : './src/search/search.tmpl.html',
          controller  : 'searchController'
      })
      .when('/search/:id', {
          templateUrl : './src/search/search.tmpl.html',
          controller  : 'searchController'
      })
      .when('/profile/:id', {
          templateUrl : './src/profile/profile.tmpl.html',
          controller  : 'profileController'
      })
}
