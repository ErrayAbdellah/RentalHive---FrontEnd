import { TestBed } from '@angular/core/testing';

import { SaveEquipmentService } from './save-equipment.service';

describe('SaveEquipmentService', () => {
  let service: SaveEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
