import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public type:string = "password";
  public email:string = "";
  public password:string = "";
  public emailRegex:RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  public passRegex:RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
  public emailError:boolean = false;
  public passwordError:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onEmailChange = (event:string) => {
      this.emailError = false
  }

  onPasswordChange = (event:string) => {
      this.passwordError = false
  }

  changeType = () => {
    if(this.type === "password"){
      this.type = "text"
    }
    else{
      this.type = "password"
    }
  }

  handleLogin = () => {
      if(!this.emailRegex.test(this.email)){
        this.emailError = true;
      }
      if(!this.passRegex.test(this.password)){
        this.passwordError = true;
      }
  }

}
