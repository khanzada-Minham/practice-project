import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registar.component.html',
  styleUrl: './registar.component.css'
})
export class RegistarComponent {
  registerObj: RegisterModel = new RegisterModel()
  registerForm() {
    const localUser = localStorage.getItem('user');
    // console.log('localUser',localUser);
    if (localUser != null) {
      const user = JSON.parse(localUser);
      // console.log('user',user);
      user.push(this.registerObj)
      localStorage.setItem('user', JSON.stringify(user))
    }
    else {
      const users = []
      users.push(this.registerObj)
      localStorage.setItem('user', JSON.stringify(users))
    }
    console.log(this.registerObj)
  }
}
export class RegisterModel {
  email: string;
  username: string;
  password: string;
  constructor() {
    this.username = ""
    this.password = ""
    this.email = ""
  }
}


