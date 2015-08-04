/**
* NovoGrupoController
* @namespace gsis.grupo.controllers
*/
(function () {
  'use strict';

  angular
    .module('gsis.grupo.controllers')
    .controller('NovoGrupoController', NovoGrupoController);

  NovoGrupoController.$inject = ['$rootScope', '$scope', 'Grupo'];

  /**
  * @namespace NovoGrupoController
  */
  function NovoGrupoController($rootScope, $scope, Grupo) {
    var vm = this;

    vm.submit = submit;
    var grupo;

    /**
    * @name submit
    * @desc Create a new Post
    * @memberOf gsis.Grupo.controllers.NovoGrupoController
    */
    function submit() {
      console.log(JSON.stringify(vm.grupo))
      Grupo.create(vm.grupo).then(createGrupoSuccessFn, createGrupoErrorFn);

      /**
      * @name createGrupoSuccessFn
      * @desc Show snackbar with success message
      */
      function createGrupoSuccessFn(data, status, headers, config) {
        // Snackbar.show('Success! Grupo created.');
      }


      /**
      * @name createGrupoErrorFn
      * @desc Propogate error event and show snackbar with error message
      */
      function createGrupoErrorFn(data, status, headers, config) {
        // Snackbar.error(data.error);
      }
    }

  }

})();