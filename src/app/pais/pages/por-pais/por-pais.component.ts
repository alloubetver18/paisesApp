import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  placeholder:string = 'Buscar pais...';
  hayError: boolean = false;
  paises: Country[] = [];
/* Recuerda, inyección de Servicio en el constructor para usar el servicio y las peticiones Http declaradas en él. */
  constructor( private paisService: PaisService ){}

  buscar(termino: string){
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

    this.paisService.buscarPais(this.termino)
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

  sugerencias(termino: string){
    this.hayError = false;
    //TODO: crear sugerencias
  }
}
