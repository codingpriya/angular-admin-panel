import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'Profile' }
    },
    {
        path: 'calender',
        component: CalenderComponent,
        data: { title: 'Calender' }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AppsRoutingModule { }