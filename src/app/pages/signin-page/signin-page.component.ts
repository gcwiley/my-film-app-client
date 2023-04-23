import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import the auth service
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent {
  // inject the router, form builder, and auth service
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  // create the sign in form with email and password fields
  signinForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  // Sign in with email and password
  // if successful, navigate user to the home page
  onSubmitSignIn() {
    this.authService
      .SigninUserwithEmailAndPassword(
        this.signinForm.value.email!,
        this.signinForm.value.password!
      )
      .then(() => {
        // navigates user to the main page
        this.router.navigateByUrl('/');
      })
      // if error, display the error message
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
