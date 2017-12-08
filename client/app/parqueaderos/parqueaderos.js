'use strict';

angular.module('parqueaderoApp')
.config(function ($stateProvider) {
	$stateProvider
	.state('parqueaderos-list', {
		url: '/parqueaderos-list',
		template: '<parqueaderos-list></parqueaderos-list>'
	});
});