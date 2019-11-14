import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  films: any=[];
  items: any=[];
loaded=false;
isItemAvailable = false; 
  constructor(public httpClient: HttpClient) {}
  ngOnInit(){
    this.items = this.httpClient.get('https://ghibliapi.herokuapp.com/films');
    setTimeout(() => {
      this.items
      .subscribe(data => {
      
        this.isItemAvailable = true;
        this.items=data;
        this.films=data;
       this.loaded=true;
      })
     
    }, 3000);
      
  }

  onSearchTerm(ev: any) {
    this.items=this.films;
    const val = ev.target.value;
    if(val && val.trim() !='')
    {
      this.isItemAvailable = true;
      this.items = this.items.filter(term => {
        return term.title.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
  }
}

