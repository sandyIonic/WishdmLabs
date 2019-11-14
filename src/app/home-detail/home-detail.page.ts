import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  films: Observable<any>;
  title: any;
  description: any;
  
  myId = null;
  constructor(private activatedRoute: ActivatedRoute,public httpClient: HttpClient) { }

 ngOnInit() {
   this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
   this.films = this.httpClient.get('https://ghibliapi.herokuapp.com/films/'+this.myId);
   this.films
   .subscribe(data => {
     this.title=data.title;
     this.description=data.description;
  
   })
 }

}
