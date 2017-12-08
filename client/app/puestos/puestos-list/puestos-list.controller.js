'use strict';

(function(){

  class PuestosListComponent {
    constructor(puestosService, carrosService) {
      this.puestosService = puestosService;
      this.carrosService = carrosService;
    }

    changeStatus(item) {
      this.puestosService.update(item).$promise
      .then(response => {
      })
      .catch(err => {
      })
    }

    $onInit(){
     this.puestosService.query().$promise
     .then(response => {
       this.puestos = response;
       console.log("Correcto", response);
     })
     .catch(err => {
      console.log("Error", err);
    })
   }
 }

 angular.module('parqueaderoApp')
 .component('puestosList', {
  templateUrl: 'app/puestos/puestos-list/puestos-list.html',
  controller: PuestosListComponent,
  controllerAs: 'vm'
});

})();
