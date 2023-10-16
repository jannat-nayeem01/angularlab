import { Component } from '@angular/core';

@Component({
  selector: 'app-template-login',
  templateUrl: './template-login.component.html',
  styleUrls: ['./template-login.component.css']
})
export class TemplateLoginComponent {
  model = {
    email: '',
    password: '',
    rememberMe: false
  };

  onSubmit() {
console.log('Form submitted:', this.model);
  }

}
