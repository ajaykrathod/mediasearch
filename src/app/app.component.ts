import { Component } from '@angular/core';
// import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // session = this.supabase.session

  // constructor(private supabase:SupabaseService){ }


  // ngOnInit() {
  //   this.supabase.authChanges((_, session) => this.session = session);
  // }

  handleClick = (id:string) => {
    document.getElementById("home")?.classList.remove('active')
    document.getElementById("search")?.classList.remove('active')
    document.getElementById("profile")?.classList.remove('active')
    document.getElementById("signup")?.classList.remove('active')
    document.getElementById(id)?.classList.add('active')
    setTimeout(() => {
      if(document.getElementById("nav")?.classList.contains("active")){
        document.getElementById("nav")?.classList.remove("active")
      }
    }, 500);
  }

  handleTitleClick = () => {
    window.location.href = "/"
  }

  handleHamburger = () => {
      if(document.getElementById("nav")?.classList.contains("active")){
        document.getElementById("nav")?.classList.remove("active")
        let container = document.getElementById("container")
        if(container){
          container.style.zIndex = "1"
        } 
      }
      else{
        document.getElementById("nav")?.classList.add("active");
        let container = document.getElementById("container")
        if(container){
          container.style.zIndex = "-1"
        } 
      }
  }
}

