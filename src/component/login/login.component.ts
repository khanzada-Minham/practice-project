import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){

  }

  loginObj: loginModel = new loginModel()
  loginForm() {
    const loginUser = localStorage.getItem('user');
    // console.log(`loginUser ${loginUser}`);
    if (loginUser != null) {
      const loginUserConvert = JSON.parse(loginUser)
      console.log('loginUserConvert', loginUserConvert);
      const isUserLogin = loginUserConvert.find((loginUserConvert: loginModel) => loginUserConvert.username == this.loginObj.username && loginUserConvert.password == this.loginObj.password)
      if(isUserLogin){
        console.log(isUserLogin);
        this.router.navigate(['/home']);
      }
      else{
        console.log('no user found');
      }
    }
    else {
      console.log('no user')
    }
  }
}
export class loginModel {
  username: string;
  password: string;
  constructor() {
    this.username = ""
    this.password = ""
  }
}