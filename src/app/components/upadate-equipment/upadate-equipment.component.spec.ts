import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteEquipmentComponent } from './upadate-equipment.component';

describe('UpadteEquipmentComponent', () => {
  let component: UpadteEquipmentComponent;
  let fixture: ComponentFixture<UpadteEquipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpadteEquipmentComponent]
    });
    fixture = TestBed.createComponent(UpadteEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
