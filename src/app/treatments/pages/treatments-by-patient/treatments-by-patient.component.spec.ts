import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsByPatientComponent } from './treatments-by-patient.component';

describe('TreatmentsByPatientComponent', () => {
  let component: TreatmentsByPatientComponent;
  let fixture: ComponentFixture<TreatmentsByPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentsByPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentsByPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
