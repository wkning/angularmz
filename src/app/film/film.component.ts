import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import {AppService} from '../app.service'

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  animations:[
    trigger('showbottom',[
      state('void',style({'left':'0'})),
      state('showright',style({'left':'50%'})),
      state('showleft',style({'left':'0'})),
      transition('*=>*',animate(500))
    ])
  ]
})
export class FilmComponent implements OnInit {
private mzdata:any;
private films:Array<any>;
private films1:Array<any>;
private showbottom:string;
  constructor(mzdata:AppService) { 
  	this.mzdata=mzdata;
    this.films=this.mzdata.getFilms();
  }

  ngOnInit() {
    this.showbottom='showleft' 
  }
  showBottom(){  
    this.showbottom='showleft' 
    this.films=this.mzdata.getFilms();
  }
  showBottom1(){ 
    this.showbottom='showright' 
    this.films=this.mzdata.getFilms1();
  }

}
