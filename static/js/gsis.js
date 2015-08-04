(function () {
  'use strict';

  angular
    .module('gsis', [
      'gsis.routes',
      'gsis.config',
      'ngDialog',
      'gsis.utils',
      'gsis.layout',
      'gsis.authentication',
      'gsis.grupos',

    ]);

  angular
  	.module('gsis.config', []);

  angular
    .module('gsis.routes', ['ngRoute']);


})();

  angular
    .module('gsis')
    .run(run);

  run.$inject = ['$http'];

  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
	
