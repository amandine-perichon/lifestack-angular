import angular from 'angular'
import ngRoute from 'angular-route'
import homeController from './home/homeController'
import headerController from './header/headerController'
import searchController from './search/searchController'
import profileController from './profile/profileController'
import initializeRootScope from './utils/initializeRootScope'
import trusted from './utils/trusted'
import skillFilter from './utils/skillFilter'
import routes from './utils/routes'

angular.module('app', [ngRoute])
  .run(initializeRootScope)
  .filter('trusted', trusted)
  .filter('filteredSkills', skillFilter)
  .controller('homeController', homeController)
  .controller('headerController', headerController)
  .controller('searchController', searchController)
  .controller('profileController', profileController)
  .config(routes)
