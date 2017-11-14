import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  public login = true;
  public signup = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }

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
  onLoggedin(e) {
    e.preventDefault();
    console.log(e);
    localStorage.setItem('isLoggedin', 'true');
  }
}
