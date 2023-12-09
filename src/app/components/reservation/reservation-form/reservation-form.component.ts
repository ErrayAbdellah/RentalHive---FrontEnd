import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/models/demande';
import { DemandeService } from 'src/app/Services/demandeService/demande.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { formatDate } from '@angular/common';
import { state } from '@angular/animations';
import { EquipmentService } from 'src/app/Services/equipmentService/equipment.service';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservation: Demande = {
    userId: 0,
    demandeDate: '',
    dateRetour: '',
    reference: undefined,
    priorite: 'Eleve',
    state: 'Annulee',
    equipmentIds: [],
  };

  constructor(
    private equipmentService: EquipmentService,
    private demandeService: DemandeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipmentService.selectedEquipmentIds$.subscribe((ids) => {
      if (ids.length > 0) {
        this.reservation.equipmentIds = ids;
      }
    });
    console.log(this.reservation.equipmentIds);
    
  }
  
  onSubmit(): void {
    const requestData: Demande = {
      userId: this.reservation.userId,
      demandeDate: formatDate(new Date(this.reservation.demandeDate), 'yyyy-MM-ddTHH:mm:ss', 'en-US'),
      dateRetour: formatDate(new Date(this.reservation.dateRetour), 'yyyy-MM-ddTHH:mm:ss', 'en-US'),
      reference: this.reservation.reference,
      priorite: this.reservation.priorite,
      state: this.reservation.state,
      equipmentIds: this.reservation.equipmentIds,
    };    

    console.log('Request Data:', requestData);

    this.demandeService.createDemande(requestData).subscribe(
      (response) => {
        console.log('Reservation saved successfully:', response);
        this.router.navigate(['/reservation']);
      },
      (error) => {
        console.error('Error creating reservation:', error);
      }
    );
  }
}
