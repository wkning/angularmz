import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

    constructor(private router: Router) {}
    resolve(): any{
        console.log('取激活路由对应视图组件数据使用');
    }
	canActivate(): boolean {
		return true;
	}
	canDeactivate(){
		console.log('我离开了这个路由');
		return true;
	}
	canActivateChild(){
		console.log('我进入了这个路由的子页');
		return true;
	}
	canLoad(){
		console.log('在加载特性模块之前进行检查');
	}
}
