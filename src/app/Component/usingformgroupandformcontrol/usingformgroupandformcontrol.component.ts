import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usingformgroupandformcontrol',
  templateUrl: './usingformgroupandformcontrol.component.html',
  styleUrls: ['./usingformgroupandformcontrol.component.scss']
})
export class UsingformgroupandformcontrolComponent {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  get name() { return this.myForm.get('name'); }
  get email() { return this.myForm.get('email'); }

  onSubmit() {
    // Handle form submission here
  }
}
