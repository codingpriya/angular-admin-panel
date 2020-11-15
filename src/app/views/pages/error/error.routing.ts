import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Error400Component } from './error400/error400.component';
import { Error403Component } from './error403/error403.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { Error503Component } from './error503/error503.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'error-400',
                component: Error400Component,
                data: { title: 'Error 400' }
            },
            {
                path: 'error-403',
                component: Error403Component,
                data: { title: 'Error 403' }
            },
            {
                path: 'error-404',
                component: Error404Component,
                data: { title: 'Error 404' }
            },
            {
                path: 'error-500',
                component: Error500Component,
                data: { title: 'Error 500' }
            },
            {
                path: 'error-503',
                component: Error503Component,
                data: { title: 'Error 503' }
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ErrorRoutingModule { }