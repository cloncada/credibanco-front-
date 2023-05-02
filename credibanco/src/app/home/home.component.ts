import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../services/tarjetas.service';

interface Tarjeta {
  id: string;
	titular: string;
	tipo: string;
	telefono: string;
	estado: string;
	panEnmascarado: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  constructor(private tarjetaService: TarjetaService ) {

  }
    tarjetas : Tarjeta[] = [];
    
    
  ngOnInit(): void {
    
    this.tarjetaService.obtenerTarjetas().subscribe(
      (response: any) => {
        this.tarjetas = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  
}

