import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registar.component.html',
  styleUrl: './registar.component.css'
})
export class RegistarComponent {
  constructor(private router: Router) { }
  registerObj: RegisterModel = new RegisterModel()
  registerForm() {
    const localUser = localStorage.getItem('user');
    if (localUser != null) {
      this.router.navigate(['/login']);
      const user = JSON.parse(localUser);
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


