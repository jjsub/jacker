(function(){
  'use strict';

  angular.module('jacker', ['ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/',            {templateUrl:'/views/home/home.html',                 controller:'HomeCtrl'})
    .when('/register',    {templateUrl:'/views/register/register.html',         controller:'RegisterCtrl'})
    .when('/login',       {templateUrl:'/views/login/login.html',               controller:'LoginCtrl'})
    .when('/logout',      {templateUrl:'/views/logout/logout.html',             controller:'LogoutCtrl'})
    .when('/lifts',       {templateUrl:'/views/lifts/lifts.html',               controller:'LiftsCtrl'})
    .when('/workouts',    {templateUrl:'/views/workouts/workouts.html',         controller:'WorkoutsCtrl'})
    .when('/goals',       {templateUrl:'/views/goals/goals.html',               controller:'GoalsCtrl'})
    .when('/performance', {templateUrl:'/views/performances/performances.html', controller:'PerformancesCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'mean-template', storeName:'cache', version:1.0});
  }]);
})();

