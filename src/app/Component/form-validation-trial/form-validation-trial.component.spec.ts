import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationTrialComponent } from './form-validation-trial.component';

describe('FormValidationTrialComponent', () => {
  let component: FormValidationTrialComponent;
  let fixture: ComponentFixture<FormValidationTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidationTrialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidationTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
