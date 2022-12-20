import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = '';
  placeholder:string = 'Buscar capital...';
  hayError: boolean = false;
  paises: Country[] = [];
/* Recuerda, inyección de Servicio en el constructor para usar el servicio y las peticiones Http declaradas en él. */
  constructor( private paisService: PaisService ){}

  buscar(termino: string){
    /* Es igual que el de por-pais.component, solo que
    usaremos una función del servicio distinta: buscar por capital.
     */
    this.hayError = false;
    this.termino = termino;
/*  Nos suscribimos a la función buscarPais declarada en el servicio. El estilo usado en el curso está deprecado, así que lo comento y dejo la nueva versión de declaración de la suscripción. */
    /* this.paisService.buscarPais(this.termino)
      .subscribe( (resp) =>{
        console.log(resp);
    }, (err) => {
      this.hayError = true;
      console.info('Error');
    }); */

    this.paisService.buscarCapital(this.termino)
    .subscribe({
      next: (resp)=>{
        console.log(resp);
        this.paises = resp;
        this.hayError = false;
      },
      error: (err)=>{
        this.hayError=true;
        this.paises = [];
      },
      complete: ()=>{
        console.info('complete')
      }
    })
  }
}
