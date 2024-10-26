import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCancellationComponent } from './appointment-cancellation.component';

describe('AppointmentCancellationComponent', () => {
  let component: AppointmentCancellationComponent;
  let fixture: ComponentFixture<AppointmentCancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentCancellationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
