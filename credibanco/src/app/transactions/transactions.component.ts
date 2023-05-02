import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TarjetaService} from '../services/transaction.service';

interface Transaction {
  pan: string;
	panEnmascarado: string;
	referencia: string;
	totalCompra: string;
	direccionCompra: string;
  estado: string;
	
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
  constructor(private route: ActivatedRoute, private transactionService: TarjetaService) { }
  transactions : Transaction[] = [];
  ngOnInit() {
    
    const idString: string | null = this.route.snapshot.paramMap.get('id');
if (idString) {
  
  this.transactionService.obtenerTransactionsPorId(idString).subscribe(
    (response: any) => {
      this.transactions = response;
      console.log(this.transactions);
    },
    (error: any) => {
      console.log(error);
    }
  )
} 
    
    
  }
  

}
