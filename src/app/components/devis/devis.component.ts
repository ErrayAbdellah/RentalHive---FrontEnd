// devis.component.ts
import { Component, OnInit } from '@angular/core';
import { Devis } from 'src/app/models/devis';
import { DevisService } from 'src/app/Services/devisService/devis.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css'],
})
export class DevisComponent implements OnInit {
  devisResponse: { msg: string; data: Devis[] } = { msg: '', data: [] };

  constructor(private devisService: DevisService) {}

  ngOnInit(): void {
    this.devisService.getDevis().subscribe(
      (response) => {
        this.devisResponse = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
