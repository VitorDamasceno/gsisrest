/**
* GrupoController
* @namespace gsis.grupo.controllers
*/
(function () {
  'use strict';

  angular
    .module('gsis.grupo.controllers')
    .controller('GrupoController', GrupoController);

  GrupoController.$inject = ['$location', '$routeParams', 'Grupo', 'Common'];

  /**
  * @namespace GrupoController
  */
  function GrupoController($location, $routeParams, Grupo, Common) {

    var vm = this;

    vm.classByAtual;
    
    vm.orderByAtual;
    
    vm.response = {};

    vm.tableState = Common.getNewTableState();

    activate();

    vm.nextPage = function(){
      console.log(vm.orderByAtual+','+vm.classByAtual+','+ JSON.stringify(vm.tableState));
      vm.tableState.page = vm.tableState.page + 1;
      Grupo.all(Common.getParams(vm.tableState)).then(grupoSuccessFn, grupoErrorFn);
    };

    vm.search = function(){
      Grupo.all(Common.getParams(vm.tableState)).then(grupoSuccessFn, grupoErrorFn);
    };

    vm.ordenar = function(campo){
      
      vm.orderByAtual = campo;

      if (vm.tableState.ordering.indexOf(campo) >= 0) {
          
          if (vm.tableState.ordering.indexOf('-') >= 0) {
          
            vm.tableState.ordering = vm.tableState.ordering.replace('-', '');
            vm.classByAtual = 'asc';

          } else {

            vm.tableState.ordering = '-' + vm.tableState.ordering;
            vm.classByAtual = 'desc';
          
          }
        
      } else {
        vm.tableState.ordering = campo;
        vm.classByAtual = 'asc';
      }

      Grupo.all(Common.getParams(vm.tableState)).then(grupoSuccessFn, grupoErrorFn);
    }

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf gsis.grupo.controllers.GrupoController
    */
    function activate() {
      // console.log(vm.tableState.classBy);
      Grupo.all(Common.getParams(vm.tableState)).then(grupoSuccessFn, grupoErrorFn);
    }

    function grupoSuccessFn(data, status, headers, config) {
      console.log(JSON.stringify(data.data));
      vm.response = data.data;
    }


    function grupoErrorFn(data, status, headers, config) {
      $location.url('/');
      // Snackbar.error('That user does not exist.');
    }



  }
})();