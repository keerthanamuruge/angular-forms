import { Component } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-using-class-model',
  templateUrl: './using-class-model.component.html',
  styleUrls: ['./using-class-model.component.scss']
})
export class UsingClassModelComponent {
  public userModel = new User('','', '')
}
