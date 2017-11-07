import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }


  public login = true;
  public signup = false;

  show(tab) {
    this.login = false;
    this.signup = false;

    if (tab === 'login') {
      this.login = true;
    }
    if (tab === 'signup') {
      this.signup = true;
    }
  }
}
