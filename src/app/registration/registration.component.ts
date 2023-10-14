import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
import { NgForm,NgModel } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

/*class SignUp{
  constructor(
    public name:string = '',
    public email:string = '',
    public password:string ='',
    public confirmPassword:string = ''){

  }
}*/
export class RegistrationComponent {
  reg1form=new FormGroup({
    Name: new FormControl(),
    Email: new FormControl(),
    Password: new FormControl(),
    ConfirmPassword: new FormControl()
  });

  //model:SignUp=new SignUp();
  OnSubmit(Form:any){
    
  }


}
