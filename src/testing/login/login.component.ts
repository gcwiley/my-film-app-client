import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  // recieves form as an argument
  onSubmit(form: NgForm) {
    console.log(form.value)
    // resets the form
    form.resetForm
  }
}