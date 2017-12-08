'use strict';

function parqueaderosService($resource, API) {
	return $resource(API + "/api/parqueaderos/:id", {
		id: '@id'
	}, {
		update: {
			method: 'PUT'
		}
	})
}

parqueaderosService.$inject = ['$resource', 'API'];
angular.module('parqueaderoApp')
.factory('parqueaderosService', parqueaderosService);