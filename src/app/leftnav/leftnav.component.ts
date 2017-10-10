import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css'],
  animations:[
    trigger('leftnav',[
      state('void',style({'right':'100%'})),
      state('show',style({'right':'30%'})),
      state('hide',style({'right':'100%'})),
      transition('*=>*',animate(500))
    ]),
    trigger('leftnavouter',[
      state('void',style({'background':'rgba(0,0,0,0)'})),
      state('show1',style({'background':'rgba(0,0,0,0.2)'})),
      state('hide1',style({'background':'rgba(0,0,0,0)'})),
      transition('*=>*',animate(500))
    ])
  ]
})
export class LeftnavComponent implements OnInit {
private showDao:boolean;
private leftnav:string;
private leftnavouter:string;
private navser1:any;
  constructor(navser:AppService) { 
      this.navser1=navser
  }

  ngOnInit() {
    this.showDao=this.navser1.getshow();
  }
  daohan(){
    this.navser1.setshow()    
     if(this.showDao){
        this.leftnav="show";
        this.leftnavouter="show1";
      }else{
        this.leftnav="hide";
        this.leftnavouter="hide1";
      }
  }
  ngDoCheck(){
    this.showDao=this.navser1.getshow();
  }
}
