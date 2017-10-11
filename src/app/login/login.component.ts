import { Component,OnInit} from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private username:string=''
private password:string=''
  constructor(private router: Router) { }

  ngOnInit() {
  }
  submit(){
		sessionStorage.setItem('username', this.username);
		sessionStorage.setItem('password', this.password);
    this.router.navigateByUrl('login');
	}
}
