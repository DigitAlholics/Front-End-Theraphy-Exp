import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiotherapistsComponent } from './physiotherapists.component';

describe('PhysiotherapistsComponent', () => {
  let component: PhysiotherapistsComponent;
  let fixture: ComponentFixture<PhysiotherapistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysiotherapistsComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhysiotherapistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
