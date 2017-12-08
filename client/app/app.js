'use strict';

angular.module('parqueaderoApp', [
    'parqueaderoApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ngMaterial',
    'md.data.table'
])

.constant('API', 'http://localhost:8080/Parqueadero')

    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });