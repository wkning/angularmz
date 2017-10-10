import {RouterModule} from '@angular/router';
import {FilmComponent } from './film.component';

import {ComingSoonComponent} from './coming-soon/coming-soon.component';
import {NowplayingComponent} from './nowplaying/nowplaying.component';

export const filmRoutes = [
	{//默认路径
		path:'',
		component:FilmComponent,
		children:[
			{
				path:'',
				redirectTo:'playing'
			},
			{
				path:'coming',
				component:ComingSoonComponent
			},
			{
				path:'playing',
				component:NowplayingComponent
			}
		]
	}
];

