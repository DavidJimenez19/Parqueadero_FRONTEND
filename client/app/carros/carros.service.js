'use strict';

function carrosService($resource, API) {
	return $resource(API + '/api/carros/:id', {
		id: '@id'
	}, {
		update: {
			method: 'PUT'
		},
		find:{
			method: 'GET',
			isArray: false,
			url: API + '/api/carros/find'
		}	
	})
}

carrosService.$inject = ['$resource', 'API'];
angular.module('parqueaderoApp')
.factory('carrosService', carrosService);