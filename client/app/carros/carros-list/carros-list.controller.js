  'use strict';

  (function(){

    class CarrosListComponent {
      constructor(carrosService, parqueaderosService) {
       this.carrosService = carrosService;
       this.parqueaderosService = parqueaderosService;
       this.idParqueadero = 1;
       this.totalPagar = 0;
       this.placaParqueo = undefined;
       this.parqueo = undefined;
       this.message = undefined;
       this.tryAgainMessage = undefined;
       this.horas = undefined;
     }

     retirarParqueo(){
      if(this.placaParqueo != undefined && this.placaParqueo != ""){
        this.carrosService.find({placa: this.placaParqueo}).$promise
        .then(response => {
          this.parqueo = response;
          console.log (this.parqueo);
          if(this.parqueo.horaSalida != undefined && this.parqueo.horaSalida > 0){
            if(this.parqueo.horaSalida > this.parqueo.horaLlegada){
              this.horas = this.parqueo.horaSalida - this.parqueo.horaLlegada;
              console.log("Horas", this.horas);
            } else{
              this.horas = this.parqueo.horaLlegada - this.parqueo.horaSalida;
              console.log("Horas", this.horas);
            }
            if(this.horas > 12){
              this.totalPagar = this.parqueadero.tarifa - ((this.parqueadero.tarifa * 0.05));
              this.agregarCaja();
            } else {
              this.totalPagar = this.parqueadero.tarifa;
              this.agregarCaja();
            }
            this.tryAgainMessage = "Retirar otro parqueo";
          }else{
            this.message = "El parqueo no existe";
            this.tryAgainMessage = "Intentar de nuevo";
          }
        })
        .catch(err =>{
          console.log("Error", err);
        });
      }else{
        this.message = "Debe ingresar la placa del parqueo";
      }

    }

    agregarCaja(){
      this.parqueadero.caja = this.parqueadero.caja + this.totalPagar;
      this.parqueaderosService.update({id: this.idParqueadero}, this.parqueadero).$promise
      .then(response => {
        console.log("Correcto", response);
      })
      .catch(err => {
        console.log("Error", err);
      })
    }

   /* selectedItemChange(puesto) {
      if (puesto !== undefined) {
        this.carros.puestos.id = puesto.id;
      }
    }*/

    restart(){
      this.totalPagar = 0;
      this.placaParqueo = undefined;
      this.parqueo = undefined;
      this.message = undefined;
      this.horas = undefined;
    }

    $onInit(){
     this.carrosService.query().$promise
     .then(response => {
      this.carros = response;
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

   eliminarCarro(carro){
    console.log('El carro ', carro);
    this.carrosService.remove({id:carro.id}).$promise
    .then(response =>{
      console.log('ok');
    })
    .catch(err =>{
      console.log(err);
    })
  }

  changeHoraSalida(item) {
    this.carrosService.update(item).$promise
    .then(response => {
    })
    .catch(err => {
    })
  }

}

angular.module('parqueaderoApp')
.component('carrosList', {
  templateUrl: 'app/carros/carros-list/carros-list.html',
  controller: CarrosListComponent,
  controllerAs: 'vm'
});

})();
