import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
declare var Swiper:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private moves:Array <any>;
private moves1:Array <any>;
private scorllAD:Array <any>;
private scorll:boolean=false;
  constructor(private https:HttpService) {
    this.https=https;
   }

  ngOnInit() {
    this.https.getItems('http://127.0.0.1:3000/api/now-playing?page=1&count5').subscribe(
        res=>{
          this.moves1=res.data.films
        }
      );
    this.https.getItems('http://127.0.0.1:3000/api/coming-soon?page=1&count3').subscribe(
        res=>{
          this.moves=res.data.films
        }
    );
    this.https.getItems('http://127.0.0.1:3000/api/scrollAD').subscribe(
        res=>{
          this.scorllAD=res.data.billboards
        }
      );
    window.onload=function(){
      setTimeout(function(){
          var swiper = new Swiper('.swiper-container',{
            loop: true,
            observer:true,
            observeParents:true,
            speed: 2000,
            autoplayDisableOnInteraction : false,
            autoplay:1000
            });
        }, 3000);
    }
  }
  loadMorePlaying(){

  }
}
