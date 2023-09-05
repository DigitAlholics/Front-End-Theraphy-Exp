import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSessionsComponent } from './video-sessions.component';

describe('VideoSessionsComponent', () => {
  let component: VideoSessionsComponent;
  let fixture: ComponentFixture<VideoSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoSessionsComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VideoSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
