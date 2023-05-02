import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarjetaService {

  private readonly url: string = 'http://localhost:8080/api/transacciones/';

  constructor(private http: HttpClient) { }


  obtenerTransactionsPorId(id : string): Observable<any> {
    return this.http.get<any>(this.url +"transacciones/tarjeta-id/" + id);
  }

}