import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  name = '';
  description = '';
  alertMessage = 'This field is required.';

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.rForm = fb.group({
    'email': [null, Validators.email ],
    'password': [null, Validators.compose([Validators.required, Validators.minLength(4)]) ]
    });
  }


  ngOnInit() {
  }

  addPost(post) {
    console.log(post);
    this.httpClient.post(`https://reqres.in/api/users`, post)
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
  }

}
