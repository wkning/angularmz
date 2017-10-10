import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private username:string=''
private password:string=''
  constructor() { }

  ngOnInit() {
  }
  submit(){
		sessionStorage.setItem('username', this.username);
		sessionStorage.setItem('password', this.password);
	}
}
