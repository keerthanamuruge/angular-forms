import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingFormComponent } from './using-form.component';

describe('UsingFormComponent', () => {
  let component: UsingFormComponent;
  let fixture: ComponentFixture<UsingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
