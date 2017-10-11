import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import {AppService} from '../app.service'

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  animations:[
    trigger('showbottom',[
      state('void',style({'left':'2.5%'})),
      state('showright',style({'left':'52.5%'})),
      state('showleft',style({'left':'2.5%'})),
      transition('*=>*',animate(500))
    ])
  ]
})
export class FilmComponent implements OnInit {
private mzdata:any;
private films:Array<any>;
private showbottom:string;
  constructor(mzdata:AppService) { 
  	this.mzdata=mzdata;
  }

  ngOnInit() {
    this.showbottom='showleft';
    
  }
  showBottom(){  
    this.showbottom='showleft' 
   
  }
  showBottom1(){ 
    this.showbottom='showright' 
  }

}
