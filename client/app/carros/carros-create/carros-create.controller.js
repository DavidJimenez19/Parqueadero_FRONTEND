'use strict';

(function(){

  class CarrosCreateComponent {
    constructor(carrosService, puestosService, parqueaderosService, $state) {
     this.carrosService = carrosService;
     this.puestosService = puestosService;
     this.parqueaderosService = parqueaderosService;
     this.$state = $state;
     this.idParqueadero = 1;
     this.puestoDisponible = true;
     this.message = undefined;
   }

   $onInit(){
    this.puestosService.getPuestos({disponible: this.puestoDisponible}, this.puestos).$promise
    .then(response => {
      this.puesto = response;
      console.log("Correcto", response);
    })
    .catch(err => {
      console.log("Error", err);
    })
    this.parqueaderosService.get({id: this.idParqueadero}).$promise
    .then(response => {
      this.parqueadero = response;
      console.log("Correcto", response);
    })
    .catch(err => {
      console.log("Error", err);
    })
  }

  createCarro(){
   if(this.parqueadero.abierto == true){
    this.carrosService.save(this.carro).$promise
    .then(response => {
      console.log("Correcto", response);
      this.$state.go('puestos-list');
    })
    .catch(err => {
      console.log("Error", err);
    });
  } else {
    this.message = "El parqueadero esta cerrado";
  }
}

}

angular.module('parqueaderoApp')
.component('carrosCreate', {
  templateUrl: 'app/carros/carros-create/carros-create.html',
  controller: CarrosCreateComponent,
  controllerAs: 'vm'
});

})();
