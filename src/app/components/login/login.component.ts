import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 user = {
    username: '',
    password: ''
  };
   login() {
    console.log('Login submitted:', this.user);
    // TODO: Add authentication logic here
  }
}
