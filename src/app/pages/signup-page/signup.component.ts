import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  // recieves form as an argument
  onSubmit(form: NgForm) {
    console.log(form)
    // resets the form
    form.resetForm
  }
}
