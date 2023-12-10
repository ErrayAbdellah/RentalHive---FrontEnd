import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApprovalModalComponent } from '../approval-modal/approval-modal.component';
import { condition } from 'src/app/models/conditions';

@Component({
  selector: 'app-approval-button',
  templateUrl: './approval-button.component.html',
  styleUrls: ['./approval-button.component.css']
})
export class ApprovalButtonComponent {
  @Input() devisId: number | undefined;
  @Input() conditions: condition[] = [];

  constructor(private modalService: NgbModal) {}

  openModal() {
    console.log('Attempting to open modal');
    const modalRef = this.modalService.open(ApprovalModalComponent);
    modalRef.componentInstance.devisId = this.devisId;
    modalRef.componentInstance.conditions = this.conditions;

    modalRef.result.then(
      (result) => {
        console.log('Modal closed:', result);
      },
      (reason) => {
        console.log('Modal dismissed:', reason);
      }
    );
  }
}
