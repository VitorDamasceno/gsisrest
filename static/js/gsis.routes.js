(function () {
  'use strict';

  angular
    .module('gsis.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/grupo', {
      controller: 'GrupoController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/grupo/grupo_home.html'
    }).when('/login', {
      controller: 'LoginController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).when('/register', {
      controller: 'RegisterController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).otherwise('/');
  }

})();
