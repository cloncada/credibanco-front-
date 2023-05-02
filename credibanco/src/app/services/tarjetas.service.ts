import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarjetaService {

  private readonly url: string = 'http://localhost:8080/api/tarjetas/';

  constructor(private http: HttpClient) { }

  obtenerTarjetasPorCedula(): Observable<Map<string, any>> {
    return this.http.get<Map<string, any>>(this.url+"por-cedula");
  }

  obtenerTarjetas(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}