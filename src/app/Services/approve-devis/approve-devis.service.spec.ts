import { TestBed } from '@angular/core/testing';

import { ApproveDevisService } from './approve-devis.service';

describe('ApproveDevisService', () => {
  let service: ApproveDevisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveDevisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
