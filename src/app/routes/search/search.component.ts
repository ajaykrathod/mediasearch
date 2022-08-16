import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search:string="";
  public unsplashFilter:boolean=false;
  public giphyFilter:boolean=false;
  public ytFilter:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick = () => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./search.worker',import.meta.url), {type:'module'});
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
      console.log("It's is there");
      
    } else {
      console.log("not supported");
      
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  handleFilters = (event:any,id:string) => {
      let element = document.getElementById(id)
      if(element){
          if(element.classList.contains("active")){
            element.classList.remove("active")
            if(id === "unsplash"){
              this.unsplashFilter = false;
            }
            if(id === "giphy"){
                this.giphyFilter = false;
            }
            if(id === "youtube"){
                this.ytFilter = false;
          }
          }
          else{
            if(id === "unsplash"){
                this.unsplashFilter = true;
            }
            if(id === "giphy"){
                this.giphyFilter = true;
            }
            if(id === "youtube"){
                this.ytFilter = true;
            }
            element.classList.add("active")
          }
      }
  }

}
