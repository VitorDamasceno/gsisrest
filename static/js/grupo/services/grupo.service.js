/**
* Profile
* @namespace gsis.grupo.services
*/
(function () {
  'use strict';

  angular
    .module('gsis.grupo.services')
    .factory('Grupo', Grupo);

  Grupo.$inject = ['$http'];

  /**
  * @namespace Grupo
  */
  function Grupo($http) {
    /**
    * @name Grupo
    * @desc The factory to be returned
    * @memberOf gsis.grupo.services.Grupo
    */
    var Grupo = {
      destroy: destroy,
      get: get,
      all: all,
      update: update,
      create: create
    };

    return Grupo;

    /////////////////////

    /**
    * @name destroy
    * @desc Destroys the given Grupo
    * @param {Object} Grupo The Grupo to be destroyed
    * @returns {Promise}
    * @memberOf gsis.grupo.services.Grupo
    */
    function destroy(grupo) {
      return $http.delete('/api/grupos/' + grupo.id);
    }


    /**
    * @name get
    * @desc Gets the grupo for user with username `username`
    * @param {string} username The username of the user to fetch
    * @returns {Promise}
    * @memberOf gsis.grupo.services.grupo
    */
    function get(grupo) {
      return $http.get('/api/grupos/' + grupo.id);
    }

    /**
    * @name get
    * @desc Gets the grupo for user with username `username`
    * @param {string} username The username of the user to fetch
    * @returns {Promise}
    * @memberOf gsis.grupo.services.grupo
    */
    function all(params) {
      return $http.get('/api/grupos/?' + params);
    }

        /**
    * @name create
    * @desc Create a new Post
    * @param {string} grupo The grupo of the new Post
    * @returns {Promise}
    * @memberOf thinkster.posts.services.Posts
    */
    function create(grupo) {
      return $http.post('/api/grupos/', {
        descricao: grupo.descricao
      });
    }


    /**
    * @name update
    * @desc Update the given grupo
    * @param {Object} grupo The grupo to be updated
    * @returns {Promise}
    * @memberOf gsis.grupo.services.grupo
    */
    function update(grupo) {
      return $http.put('/api/grupos/' + grupo);
    }
  }
})();