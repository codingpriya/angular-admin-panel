import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: { title: 'Login' }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: { title: 'Register' }
            },
            {
                path: 'lock-screen',
                component: LockScreenComponent,
                data: { title: 'Lock Screen' }
            },
            {
                path: '',
                children: [
                    {
                        path: 'error',
                        loadChildren: () => import('./error/error.module').then(m => m.ErrorModule),
                    }
                ]
            },
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule { }