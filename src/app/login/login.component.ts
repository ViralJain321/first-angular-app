import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  enteredUser: string = "";
  enteredPwd: string = "";
  userType: string = "";

  isValid: boolean = false;
  isInvalid: boolean = false;

  usersArr: any[] = [
    { username: "abc", password: "1234" },
    { username: "def", password: "qwerty" },
    { username: "def", password: "qwerty" }
  ]

  checkUser() {
    let msg = "Login Failed"
    for (let user of this.usersArr) {
      if (user.username === this.enteredUser && user.password === this.enteredPwd) {
        this.isValid = true;
        break;
      }
    }
    this.isValid ? undefined : this.isInvalid = true
    return this.isValid ? alert("Login Successful") : alert("Login Failed");
  }

  signIn(loginForm: NgForm) {
    
    console.log(loginForm.value);
  }


}
