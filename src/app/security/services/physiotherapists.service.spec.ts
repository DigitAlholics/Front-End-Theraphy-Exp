import { TestBed } from '@angular/core/testing';

import { PhysiotherapistsService } from './physiotherapists.service';

describe('PhysiotherapistsService', () => {
  let service: PhysiotherapistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysiotherapistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
