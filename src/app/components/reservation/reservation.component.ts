import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'src/app/Services/demandeService/demande.service';
import { Demande } from 'src/app/models/demande';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: any[] = [];
  filteredReservations: any[] = [];
  searchState: string = '';

  constructor(private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.demandeService.getReservations().subscribe(
      (data) => {
        this.reservations = data;
        this.filteredReservations = [...this.reservations];
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
}
