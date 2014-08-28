'use strict';

require('angular/angular');
require('angular-route');

var dsaApp = angular.module('dsaApp', ['ngRoute']); //jshint ignore:line

require('./controllers/pagesController')(dsaApp);

dsaApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/index', {
      templateUrl : 'js/views/page.html',
      controller: 'PagesController'
    } )
    .otherwise({
      redirectTo: '/index'
    });
}]);
