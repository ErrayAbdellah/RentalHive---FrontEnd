import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'src/app/Services/demandeService/demande.service';
import { Demande } from 'src/app/models/demande';
import { Router, NavigationExtras } from '@angular/router';
import { DevisService } from 'src/app/Services/devisService/devis.service';
import { Devis } from 'src/app/models/devis';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: any[] = [];
  filteredReservations: any[] = [];
  searchState: string = '';

  constructor(private demandeService: DemandeService, private devisService: DevisService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.demandeService.getReservations().subscribe(
      (data) => {
        this.reservations = data;
        this.filteredReservations = [...this.reservations];
        console.log(this.reservations)
      },
      (error) => {
        console.error('Error loading Reservations:', error);
      }
    );
  }

  searchDemandesByState(): void {
    if (!this.searchState) {
      this.filteredReservations = [...this.reservations];
      return;
    }

    this.filteredReservations = this.reservations.filter(reservation =>
      reservation.state.toLowerCase().includes(this.searchState.toLowerCase())
    );
  }

  generateDevis(demandeId: number){
    this.devisService.createDevis(demandeId).subscribe(
      (response: Devis)=>{
        console.log("devis created successfully : "+ response)
      },
      (error)=>{
        console.error("Error occured "+error)
      }
    );
  }
}
