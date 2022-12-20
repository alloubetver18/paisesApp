import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2/';
  private nombre: string = 'name/peru';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/name/${termino}`;

    return this.http.get<Country[]>(url);
/* Otra forma de hacer la consulta y controlar si es erronea... */
    /* return this.http.get(url)
    .pipe(
      catchError(err=> of([]))
    ); */
  }

  buscarCapital(termino: string): Observable<Country[]>{
    /* Buscamos por la capital. La url final sería:
    https://restcountries.com/v2/capital/lima
    */
   const url = `${ this.apiUrl }/capital/${termino}`;

   return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id: string):Observable<Country>{
    //https://restcountries.com/v2/alpha/pe
    const url = `${ this.apiUrl }/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
