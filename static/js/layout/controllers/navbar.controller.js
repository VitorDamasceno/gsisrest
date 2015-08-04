/**
* NavbarController
* @namespace gsis.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('gsis.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication', 'Common'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, Authentication, Common) {
    var vm = this;

    vm.logout = logout;

    $scope.reloadRoute = function() {
      // $window.location.reload();
    }

    /**
    * @name logout
    * @desc Log the user out
    * @memberOf gsis.layout.controllers.NavbarController
    */
    function logout() {
      Authentication.logout();
    }
  }
})();