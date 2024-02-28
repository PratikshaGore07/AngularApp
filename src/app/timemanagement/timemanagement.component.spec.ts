import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimemanagementComponent } from './timemanagement.component';

describe('TimemanagementComponent', () => {
  let component: TimemanagementComponent;
  let fixture: ComponentFixture<TimemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimemanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
