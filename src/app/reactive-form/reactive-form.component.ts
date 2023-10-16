import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators,ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  submitted = false;

  loginForm = new FormGroup(
    {
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required]),
      rememberMe: new FormControl('')
    })
    onSubmit(){
      this.submitted = true;
    }
  
  
}
