import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  // add member variables
  errorMessage: string = '';
  emailValue: string = '';
  passwordValue: string = '';

  constructor(private router: Router, private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  onClickSignIn(): void {
    // sets error message to empty string - resets error message
    this.errorMessage = '';
    // sign in with firebase auth
    this.auth
      .signInWithEmailAndPassword(this.emailValue, this.passwordValue)
      // if auth - send user to homepage
      .then(() => this.router.navigateByUrl('/'))
      // if error - sends user error message
      .catch((error) => (this.errorMessage = error.message));
  }
}
