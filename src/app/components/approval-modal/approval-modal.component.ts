import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApproveDevisService } from 'src/app/Services/approve-devis/approve-devis.service';
import { condition } from 'src/app/models/conditions';

@Component({
  selector: 'app-approval-modal',
  templateUrl: './approval-modal.component.html',
  styleUrls: ['./approval-modal.component.css']
})
export class ApprovalModalComponent {
  @Input() devisId: number | undefined;
  @Input() conditions: condition[] = [];

  constructor(public activeModal: NgbActiveModal, private approveDevisService: ApproveDevisService) {}

  onApproveDevis(): void {
    if (this.devisId && this.conditions.length > 0) {
      this.approveDevisService.approveDevis(this.devisId, this.conditions).subscribe({
        next: (approvalResult: string) => {
          console.log('Devis approved:', approvalResult);
          this.activeModal.close('Devis approved');
        },
        error: (error) => {
          console.error('Error approving devis', error);
        }
      });
    } else {
      console.error('Invalid devisId or conditions');

   }
  }
}
