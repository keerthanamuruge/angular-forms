import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-validation-trial',
  templateUrl: './form-validation-trial.component.html',
  styleUrls: ['./form-validation-trial.component.scss']
})
export class FormValidationTrialComponent {
  constructor(private _fb:FormBuilder){}

  address = this._fb.control('')
  get alternate(){
    return this.contactDetail.get("alternate") as FormArray
  }

  alternateAddress(i: any){
    const alternateaddress = <FormArray>this.alternate.controls[i].get('alternate_address')
    return alternateaddress.controls
  }

  addAlternateAddress(i: any){
    console.log(this.alternate.controls[i])
    console.log(this.alternate.controls[i].get('alternate_address'))
    const temp = <FormArray>this.alternate.controls[i].get('alternate_address')
    temp.push(this.address)
  }
  addAlternateMobileNumber(){

    this.alternate.push(this._fb.group({
      alter_mobile_number: [''],
      email: [''],
      alternate_address: this._fb.array([]),
    }))
  }

  contactDetail = this._fb.group(
    {
      mobile_number: [''],
      email_id: [''],
      alternate: this._fb.array([]),
    }
  );


}
