import { TestBed } from '@angular/core/testing';

import { UpdateEquipmentService } from './update-equipment.service';

describe('UpdateEquipmentService', () => {
  let service: UpdateEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
