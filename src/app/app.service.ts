import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
private showL:boolean=false;
  constructor() {       

  }
  setshow(){
  	this.showL=!this.showL;
  }
  getshow(){
  	return this.showL;
  }

}
