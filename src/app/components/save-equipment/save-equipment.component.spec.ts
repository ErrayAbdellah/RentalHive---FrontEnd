import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEquipmentComponent } from './save-equipment.component';

describe('SaveEquipmentComponent', () => {
  let component: SaveEquipmentComponent;
  let fixture: ComponentFixture<SaveEquipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveEquipmentComponent]
    });
    fixture = TestBed.createComponent(SaveEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
