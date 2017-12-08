'use strict';

function puestosService($resource, API) {
    return $resource(API + "/api/puestos/:id", {
        id: '@id'
    }, {
        update: {
            method: 'PUT'
        },
        getPuestos: {
        	method: 'GET',
        	isArray: true,
        	url: API + '/api/puestos/encontrar'
        }
    })
}

puestosService.$inject = ['$resource', 'API'];
angular.module('parqueaderoApp')
.factory('puestosService', puestosService);