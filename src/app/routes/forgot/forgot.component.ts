import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  public email:string = "";
  public emailRegex:RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  public passRegex:RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
  public emailError:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleChange = (event:string) => {    
    this.emailError = false
  }
  handleForgot = () => {
      if(!this.emailRegex.test(this.email)){
          this.emailError = true;
      }
  }
}
