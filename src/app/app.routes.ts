import {AuthService} from './auth.service';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {HomeModule} from './home/home.module';
import {FilmModule} from './film/film.module';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
 
//定义路由表
export const appRoutes = [
	{//默认路径
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
	{
		path:'home',
		loadChildren:'./home/home.module#HomeModule'
		
	},
	
	{//写带子路由的路由信息
		path:'film',
		loadChildren:'./film/film.module#FilmModule'
		
	},
	{
		path:'profile',
		component:ProfileComponent,
		canActivate:[AuthService]
	},
	{
		path:'login',
		component:LoginComponent,
	},
	{/*对找不到的页面的处理  ,这个 配置项只能写在路由表的最后面*/
		path:'**',
		redirectTo:'home'
	}
];
