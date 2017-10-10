import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-filmitem',
  templateUrl: './filmitem.component.html',
  styleUrls: ['./filmitem.component.css']
})
export class FilmitemComponent implements OnInit {
@Input() moveItem:any; 
  constructor() { }

  ngOnInit() {
  }

}
