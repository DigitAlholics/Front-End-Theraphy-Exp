import { TestBed } from '@angular/core/testing';

import { TreatmentsByPatientService } from './treatments-by-patient.service';

describe('TreatmentsByPatientService', () => {
  let service: TreatmentsByPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreatmentsByPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
