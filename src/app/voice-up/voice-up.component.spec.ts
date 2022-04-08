import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceUpComponent } from './voice-up.component';

describe('VoiceUpComponent', () => {
  let component: VoiceUpComponent;
  let fixture: ComponentFixture<VoiceUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
