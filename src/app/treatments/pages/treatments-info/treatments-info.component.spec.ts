import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsInfoComponent } from './treatments-info.component';

describe('TreatmentsInfoComponent', () => {
  let component: TreatmentsInfoComponent;
  let fixture: ComponentFixture<TreatmentsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
