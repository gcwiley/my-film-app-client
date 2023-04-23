import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {

  // recieves form as an argument
  onSubmit(form: NgForm) {
    console.log(form)
    // resets the form
    form.resetForm
  }
}
