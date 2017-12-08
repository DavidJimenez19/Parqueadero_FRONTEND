'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(parqueaderosService) {
    this.parqueaderosService = parqueaderosService;
    this.message = undefined;
    }

    parqueaderoOpen(){
      if(this.parqueaderos.abierto == true){
      this.parqueaderosService.get({id: this.parqueaderos.id}, this.parqueaderos).$promise
        .then(response => {
          this.parqueaderos = response;
          console.log("Hola", reponse);
        })
        .catch(err => {
          console.log("Error", err);
        })
      } else {
        this.message = "El parqueadero esta cerrado";
      }
    }
}

NavbarController.$inject = ['parqueaderosService'];
angular.module('parqueaderoApp')
  .controller('NavbarController', NavbarController);
