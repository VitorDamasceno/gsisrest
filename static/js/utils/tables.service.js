/**
* Tables
* @namespace gsis.Tables.services
*/
(function () {
  'use strict';

  angular
    .module('gsis.utils.services')
    .factory('Common', Common);

  /**
  * @namespace Tables
  * @returns {Factory}
  */
  function Common() {

    
    /**
    * @name Tables
    * @desc The Factory to be returned
    */
    // var tableState = new Object();

    var Common = {
      getNewTableState : getNewTableState,
      getParams : getParams
    };

    return Common;

    function getParams(tableState){
      var params = 'search=' +tableState.search;
      params += '&page=' +tableState.page;
      params += tableState.ordering ? '&ordering=' +tableState.ordering : '';
      return params;
    }

    function getNewTableState(){
      var newState = new Object();
      newState.search = "";
      newState.page = 1;
      newState.ordering = "";
      return newState;
    } 


  }

})();