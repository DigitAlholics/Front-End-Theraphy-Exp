import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiotherapistSidenavComponent } from './physiotherapist-sidenav.component';

describe('PhysiotherapistSidenavComponent', () => {
  let component: PhysiotherapistSidenavComponent;
  let fixture: ComponentFixture<PhysiotherapistSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysiotherapistSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysiotherapistSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
