import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { paswordValidator } from 'src/app/customvalidation/password.validator';
import { forbiddenUserName } from 'src/app/customvalidation/username.validator';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.scss']
})
export class ReactiveFormValidationComponent {
  constructor(private fb:FormBuilder){

  }

  get userName(): FormControl{
    return this.contactform.get('userName') as FormControl
  }
  get alternateEmails() {
    return this.contactform.get('alternateEmail') as FormArray;
  }

  addAlternateEmails() {
    this.alternateEmails.push(this.fb.control(''))
  }
  contactform = this.fb.group({
      userName: ['keerthu', [Validators.required, Validators.minLength(3), forbiddenUserName]],
      password: [''],
      confirmPassword: [''], 
      address: this.fb.group({
          city: [''],
          state: [''],
      }),
      alternateEmail: this.fb.array([])
    }, { validators: [paswordValidator] });

    // loadapi(){
    //   this.contactform.setValue({
    //     userName:'keerthu',
    //   password: 'hello',
    //   confirmPassword: 'hellosdf', 
    //   address: {
    //     city: 'chennai',
    //     state: 'tamil nadu',
    //   }
    //   });
    // };
    loadapihalfdata(){
      this.contactform.patchValue({
        userName:'keerthu',
        password: 'hello'
      });
    };
    getvalue(username: any){
      if (username.errors.required){
        return true
      }
      return false
    }
    getminlength(username: any){
      if (username.errors.minlength){
        return true
      }
      return false
    }
    getcustomValidation(username: any){

      console.log(username)
      if (username.errors?.forbiddenName){
        return username.errors?.forbiddenName?.value
      }
      // username.errors.forbiddenName.value = ''
      return false
    }
}
