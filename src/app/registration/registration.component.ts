import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
import { NgForm,NgModel,Validators,ValidationErrors } from '@angular/forms';

class SignUp{
  constructor(
    public name:string = '',
    public email:string = '',
    public password:string ='',
    public confirmPassword:string = ''){

  }
}
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
  isPasswordMatch = false;
  

  /*reg1form=new FormGroup({
    Name: new FormControl(),
    Email: new FormControl(),
    Password: new FormControl(),
    ConfirmPassword: new FormControl()
  });*/
  model:SignUp=new SignUp();
  OnSubmit(Form:any){
    
      if(Form.value.password === Form.value.confirmPassword){
          
        this.isPasswordMatch = true;
      }else{
        this.isPasswordMatch = false;
        
      }
      if(Form.valid()){
        Form.reset();
      }
      
    
    }

    


}
