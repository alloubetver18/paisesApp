import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { PorPaisComponent } from '../../pages/por-pais/por-pais.component';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent {

  @Input() paises: Country[] = [];
  termino: string = '';

/* Recuerda, inyección de Servicio en el constructor para usar el servicio y las peticiones Http declaradas en él. */
  constructor( private paisService: PaisService){}

}
