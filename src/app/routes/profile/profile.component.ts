import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public general:boolean = true;
  public social:boolean = false;
  public settings:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleClick = (event:any) => {
    console.log(event);
    
      console.log(event.target.innerHTML);
      console.log(event.target.id);
      console.log(event.target.dataset.matIconName);
      
      if(event.target.innerHTML === "General" || event.target.id === "general" || event.target.dataset.matIconName === "person"){
          this.general = true;
          this.social = false;
          this.settings = false
        }
        if(event.target.innerHTML === "Social Media" || event.target.id === "social" || event.target.dataset.matIconName === "groups"){
          this.general = false;
          this.social = true;
          this.settings = false
        }
        if(event.target.innerHTML === "Settings" || event.target.id === "settings" || event.target.dataset.matIconName === "settings"){
          this.general = false;
          this.social = false;
          this.settings = true
          
      }
  }
  handleMenuClick = () => {
     let sidebar = document.getElementById('sidebar')
     if(sidebar){
        if(sidebar.classList.contains('expanded')){
            sidebar.classList.remove('expanded')
        }
        else{
          sidebar.classList.add('expanded')
        }
     }
  }
}
