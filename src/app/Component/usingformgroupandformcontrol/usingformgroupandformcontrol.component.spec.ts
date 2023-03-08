import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingformgroupandformcontrolComponent } from './usingformgroupandformcontrol.component';

describe('UsingformgroupandformcontrolComponent', () => {
  let component: UsingformgroupandformcontrolComponent;
  let fixture: ComponentFixture<UsingformgroupandformcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingformgroupandformcontrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingformgroupandformcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
