export default function($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl : './src/home/home.tmpl.html',
          controller  : 'homeController'
      })
      .when('/search', {
          templateUrl : './src/skills/skills.tmpl.html',
          controller  : 'headerController'
      })
}
