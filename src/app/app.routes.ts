
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {HomeModule} from './home/home.module';
import {FilmModule} from './film/film.module';
 
//定义路由表
export const appRoutes = [
	{//默认路径
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
	{
		path:'home',//路由
		loadChildren:'./home/home.module#HomeModule'
		
	},
	
	{//写带子路由的路由信息
		path:'film',//路由
		loadChildren:'./film/film.module#FilmModule'
		
	},
	
	
	{/*对找不到的页面的处理  ,这个 配置项只能写在路由表的最后面*/
		path:'**',
		redirectTo:'home'
	}
];
