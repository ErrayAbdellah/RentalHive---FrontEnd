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

  constructor(private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.demandeService.getReservations().subscribe(
      (data) => {
        this.reservations = data;
      },
      (error) => {
        console.error('Error loading reservations:', error);
      }
    );
  }

  private initializeDataTable() {
    $(document).ready(function () {
      $('#data-table').DataTable({
        scrollX: true,
        info: false,
        responsive: true,
      });
    });
  }
}
