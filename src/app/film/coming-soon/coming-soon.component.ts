import { Component, OnInit ,Input} from '@angular/core';
import {AppService} from '../../app.service'
import {HttpService} from '../../http.service'

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
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
        _this.http.getItems('http://127.0.0.1:3000/api/coming?page='+_this.filmsPage+'&count=7').subscribe(
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
  	 this.http.getItems('http://127.0.0.1:3000/api/coming?page='+this.filmsPage+'&count7').subscribe(
        res=>{
          this.films=res.data.films;
        }
      );
  }

}
