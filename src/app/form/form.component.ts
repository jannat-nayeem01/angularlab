import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { Directive,ElementRef } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  checkif:boolean=true;
  color:string = 'red';
  people:any[]=[
    {
      name:'A',
      ID: '1111'
    },
    {
      name: 'B',
      ID: '2222'
    },
    {
      name:'C',
      ID: '3333'
    }
  ]
  // Code for Task 3
  isCollapse:boolean=true;
  toggleCollapse(){
    !this.isCollapse?this.isCollapse=true:this.isCollapse=false;

  }
  //End

  output=0;
  onkeyup(val:string){
    
    this.output += 1;
  }

  constructor(el:ElementRef){
  
  }
  registrationform=new FormGroup({
    Name: new FormControl(),
    Email: new FormControl(),
    Password: new FormControl(),
    ConfirmPassword: new FormControl()
  });
  profileForm= new FormGroup({
    firstName : new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      zipCode: new FormControl('')
    }),
    gender: new FormControl('')
    
    });

OnSubmit(){
  console.warn(this.profileForm.value)
}

}
