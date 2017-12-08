'use strict';

angular.module('parqueaderoApp')
.config(function($stateProvider) {
    $stateProvider
    .state('puestos-list', {
        url: '/puestos-list',
        template: '<puestos-list></puestos-list>'
    });
});