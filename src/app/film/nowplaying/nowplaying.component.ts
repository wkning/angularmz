import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css'],
})
export class NowplayingComponent implements OnInit {
private films:Array<any>;
private filmsPage:number=1;
  constructor(private http:HttpService) { 
    let _this=this;
    window.onscroll=function(){
      let s_top = document.body.scrollTop || document.documentElement.scrollTop;
      let screenheight = window.screen.availHeight
      let counts=screenheight*_this.filmsPage;
      let nowcount =s_top+screenheight+screenheight/2; 
      if(nowcount>counts){
        _this.filmsPage++
        _this.http.getItems('http://127.0.0.1:3000/api/playing?page='+_this.filmsPage+'&count=7').subscribe(
            res=>{
              for(let item of res.data.films){
                _this.films.push(item)
              }
            }
          );
      }
    } 
  }
  ngOnInit() {
	this.http.getItems('http://127.0.0.1:3000/api/playing?page=1&count7').subscribe(
	    res=>{
	      this.films=res.data.films;
	    }
	  ); 
  }

}
