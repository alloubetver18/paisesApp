import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService){}

  ngOnInit(): void{
    /* Operadores de RX-JS: switchMap
    Este operador de rxjs permite recibir un Observable y devolver otro.*/
    /* Operadores de RX-JS: tap
    Este operador de rxjs permite generar un "efecto secundario".*/
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
        tap( console.log)
      )
      .subscribe (pais => this.pais = pais
        /* console.log(pais); */
      )
    /* this.activatedRoute.params
      .subscribe( params =>{
        console.log(params['id']);
        this.paisService.getPaisPorAlpha(params['id'])
          .subscribe(pais=>{
            console.log(pais);
          })
      }); */
  }

}
