import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingClassModelComponent } from './using-class-model.component';

describe('UsingClassModelComponent', () => {
  let component: UsingClassModelComponent;
  let fixture: ComponentFixture<UsingClassModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingClassModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingClassModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
