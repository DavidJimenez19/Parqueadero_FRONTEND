'use strict';

(function(){

  class ParqueaderosListComponent {
    constructor(parqueaderosService, carrosService) {
      this.parqueaderosService = parqueaderosService;
      this.carrosService = carrosService;
      this.puestoSeleccionado = undefined;
    }

    changeTarifa(item){
      this.parqueaderosService.update(item).$promise
      .then(response => {
        console.log("Correcto", item);
      })
      .catch(err => {
        console.log("Error", item);
      })
    }

    changeStatus(item) {
      this.parqueaderosService.update(item).$promise
      .then(response => {
        console.log("Correcto", item);
      })
      .catch(err => {
        console.log("Error", item);
      })
    }

    $onInit(){
      this.parqueaderosService.query().$promise
      .then(response => {
        this.parqueaderos = response;
      })
      .catch(err => {
      })
    }

  }

  angular.module('parqueaderoApp')
  .component('parqueaderosList', {
    templateUrl: 'app/parqueaderos/parqueaderos-list/parqueaderos-list.html',
    controller: ParqueaderosListComponent,
    controllerAs: 'vm'
  });

})();
