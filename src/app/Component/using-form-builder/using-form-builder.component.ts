import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-using-form-builder',
  templateUrl: './using-form-builder.component.html',
  styleUrls: ['./using-form-builder.component.scss']
})
export class UsingFormBuilderComponent {
  constructor (private fb: FormBuilder){}
  registerationForm = this.fb.group({
    userName: ['keerthu'],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      street:['']
    })
  });
}
