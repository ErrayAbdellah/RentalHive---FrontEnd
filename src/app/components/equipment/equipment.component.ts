import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/Services/equipmentService/equipment.service';
import { Equipment } from 'src/app/models/equipment';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
})
export class EquipmentComponent implements OnInit {
  equipmentUrl: string = 'assets/img/640x518.webp';

  equipmentList: Equipment[] = [];

  constructor(private equipmentService: EquipmentService) {}

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

  // openReservationModal(equipment: Equipment, content: any): void {
  //   const modalRef = this.modalService.open(content, { centered: true });
  //   modalRef.componentInstance.equipment = equipment;
  // }
}
