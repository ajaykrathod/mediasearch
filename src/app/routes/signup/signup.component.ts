import { Component, OnInit } from '@angular/core';
// import { SupabaseService } from 'src/app/supabase.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public type:string = "password";
  public email:string = "";
  public password:string = "";
  public name:string = "";
  public username:string = "";
  public emailRegex:RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  public passRegex:RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
  public emailError:boolean = false;
  public passwordError:boolean = false;
  public usernameError:boolean = false;
  public nameError:boolean = false;
  public message:string = "";

  // constructor(private supabase:SupabaseService) { }

  ngOnInit(): void {
  }

  onEmailChange = (event:string) => {
      this.emailError = false
  }

  onPasswordChange = (event:string) => {
      this.passwordError = false
  }

  onUsernameChange = (event:string) => {
    this.usernameError = false
  }

  onNameChange = (event:string) => {
      this.nameError = false
  }
  changeType = () => {
    if(this.type === "password"){
      this.type = "text"
    }
    else{
      this.type = "password"
    }
  }

  handleSignup = async() => {
    if(!this.emailRegex.test(this.email)){
      this.emailError = true;
    }
    if(!this.passRegex.test(this.password)){
      this.passwordError = true;
    }
    if(!this.name){
      this.nameError = true
    }
    if(!this.username){
      this.usernameError = true
    }
    if(!this.emailError && !this.passwordError && !this.nameError && !this.usernameError){
      try {
          // await this.supabase.signIn(this.email,this.password)
          this.message = "Login Successfull"
      } catch (error:any) {
          this.message = error.error_description || error.message
      }
      setTimeout(() => {
        window.location.href = "/"
      }, 4000)
    }
  }

}
