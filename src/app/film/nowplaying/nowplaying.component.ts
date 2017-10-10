import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service'

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css']
})
export class NowplayingComponent implements OnInit {
private films:Array<any>;
private film:any;
  constructor(filmsItem:AppService) { 
  	this.film=filmsItem
  }

  ngOnInit() {
  	this.films=this.film.getFilms();
  }

}
