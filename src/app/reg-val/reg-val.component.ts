import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { RegexValidationService } from '../regex-validation.service';
//import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reg-val',
  templateUrl: './reg-val.component.html',
  styleUrls: ['./reg-val.component.css']
})
export class RegValComponent {

  userModel = new User("" , "", "");
  constructor(private _validateService: RegexValidationService) { }
  
  

  onSubmit(){
    this._validateService.validate(this.userModel)
    .subscribe(
      data => console.log('Success', data),
      error => console.log('Error', error)
    )
  }
}


