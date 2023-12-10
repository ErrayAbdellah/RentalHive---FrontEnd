import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ApprovalModalComponent } from 'src/app/components/approval-modal/approval-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalService: NgbModal) {}

  openModal(): NgbModalRef {
    const modalRef = this.modalService.open(ApprovalModalComponent, {
      /* optional: modal configuration */
    });

    return modalRef;
  }

  closeModal(modalRef: NgbModalRef): void {
    modalRef.close();
  }
}
