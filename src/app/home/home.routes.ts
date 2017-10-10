import {RouterModule} from '@angular/router';
import {HomeComponent } from './home.component';

export const homeRoutes = [
	{//默认路径
		path:'',
		component:HomeComponent,
		//children:[]
	}
];

