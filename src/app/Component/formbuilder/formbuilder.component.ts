import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.scss']
})
export class FormbuilderComponent {
  constructor(private fb:FormBuilder){

  }
  contactform = this.fb.group({
      userName: ['keerthu'],
      password: [''],
      confirmPassword: [''], 
      address: this.fb.group({
        city: [''],
        state: [''],
    })
    });

    loadapi(){
      this.contactform.setValue({
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
      this.contactform.patchValue({
        userName:'keerthu',
        password: 'hello'
      });
    };
}
