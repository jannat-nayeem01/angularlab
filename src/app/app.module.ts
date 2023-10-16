import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Test2Directive } from './form/test2.directive';
import { ButtonclickDirective } from './form/buttonclick.directive';
import { NgIfForSwitchDirective } from './form/ng-if-for-switch.directive';
import { RegistrationComponent } from './registration/registration.component';
import { TemplateLoginComponent } from './template-login/template-login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Test2Directive,
    ButtonclickDirective,
    NgIfForSwitchDirective,
    RegistrationComponent,
    TemplateLoginComponent,
    ReactiveFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
