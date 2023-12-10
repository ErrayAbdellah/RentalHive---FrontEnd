import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalButtonComponent } from './approval-button.component';

describe('ApprovalButtonComponent', () => {
  let component: ApprovalButtonComponent;
  let fixture: ComponentFixture<ApprovalButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovalButtonComponent]
    });
    fixture = TestBed.createComponent(ApprovalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
