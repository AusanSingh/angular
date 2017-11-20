import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
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
