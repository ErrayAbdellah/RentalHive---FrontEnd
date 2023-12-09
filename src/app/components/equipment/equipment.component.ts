import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/Services/equipmentService/equipment.service';
import { Equipment } from 'src/app/models/equipment';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
})
export class EquipmentComponent implements OnInit {
  equipmentUrl: string = 'assets/img/640x518.webp';
  equipmentList: Equipment[] = [];

  constructor(
    private equipmentService: EquipmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEquipment();
  }

  loadEquipment(): void {
    this.equipmentService.getAllEquipment().subscribe(
      (data) => {
        this.equipmentList = data;
        console.log(this.equipmentList);
      },
      (error) => {
        console.error('Error loading equipment:', error);
      }
    );
  }

  reserveEquipment(equipment: Equipment): void {
    const selectedEquipmentIds = [equipment.equipmentId];
    this.equipmentService.setSelectedEquipmentIds(selectedEquipmentIds);
    console.log(selectedEquipmentIds);
    
    this.router.navigate(['/reservation-form']);
  }
  
}
