(function () {
  'use strict';

  angular
    .module('gsis.authentication', [
      'gsis.authentication.controllers',
      'gsis.authentication.services'
    ]);

  angular
    .module('gsis.authentication.controllers', []);

  angular
    .module('gsis.authentication.services', ['ngCookies']);
})();