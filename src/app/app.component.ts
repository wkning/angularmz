import { Component } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('iconan',[
      state('void',style({'bottom':'-80px'})),
      state('show',style({'bottom':'20px'})),
      state('hide',style({'bottom':'-80px'})),
      transition('*=>*',animate(500))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  private iconan:string;

  constructor(){
  	let _this=this;
  	 window.onscroll=function(){
       let s_top = document.body.scrollTop || document.documentElement.scrollTop;
       if(s_top>200){
       _this.iconan="show"
       }else{
       	_this.iconan="hide"
       }
      } 
  }
  pushTop(){
  	window.scrollTo(0,0);
  }
}
