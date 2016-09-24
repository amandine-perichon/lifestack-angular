import angular from 'angular'
import ngRoute from 'angular-route'
import homeController from './home/homeController'
import headerController from './header/headerController'
import trusted from './utils/trusted'
import routes from './utils/routes'

angular.module('app', [ngRoute])
  .filter('trusted', trusted)
  .controller('homeController', homeController)
  .controller('headerController', headerController)
  .config(routes)
