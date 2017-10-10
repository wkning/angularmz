import { Component, OnInit ,Input} from '@angular/core';
import {AppService} from '../../app.service'

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
private films:Array<any>;
private film:any;
  constructor(filmsItem:AppService) { 
  	this.film=filmsItem
  }

  ngOnInit() {
  	this.films=this.film.getFilms1();
  }

}
