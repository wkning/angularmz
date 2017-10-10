import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'
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
private dataser:any;
  constructor(dataser:AppService) {
  	this.dataser=dataser;
    this.moves=this.dataser.getMoves();
    this.moves1=this.dataser.getMoves1();
    this.scorllAD=this.dataser.getScollAD();
   }

  ngOnInit() {
    window.onload=function(){
      var swiper = new Swiper('.swiper-container',{
        loop: true,
        observer:true,
        observeParents:true,
        speed: 2000,
        autoplayDisableOnInteraction : false,
        autoplay:1000
      });
    }
  }

}
