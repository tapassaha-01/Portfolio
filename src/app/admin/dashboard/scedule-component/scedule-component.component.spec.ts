import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceduleComponentComponent } from './scedule-component.component';

describe('SceduleComponentComponent', () => {
  let component: SceduleComponentComponent;
  let fixture: ComponentFixture<SceduleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SceduleComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceduleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
