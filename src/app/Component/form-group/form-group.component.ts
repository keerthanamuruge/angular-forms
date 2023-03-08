import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {
  registrationForm = new FormGroup({
    userName: new FormControl('keerthu'),
    password: new FormControl(''),
    confirmPassword: new FormControl(), 
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
    })
  });
  loadapi(){
    this.registrationForm.setValue({
      userName:'keerthu',
    password: 'hello',
    confirmPassword: 'hellosdf', 
    address: {
      city: 'chennai',
      state: 'tamil nadu',
    }
    });
  };
  loadapihalfdata(){
    this.registrationForm.patchValue({
      userName:'keerthu',
      password: 'hello'
    });
  };
}
