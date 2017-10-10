import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.css']
})
export class HeadernavComponent implements OnInit {
private navser:any;
  constructor(navser:AppService) { 
      this.navser=navser
  }
  ngOnInit() {
  }
  
  daohan(){
    this.navser.setshow();
  }
}
