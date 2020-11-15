import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsRoutingModule } from './apps.routing';
import { ProfileComponent } from './profile/profile.component';
import { CalenderComponent } from './calender/calender.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [
        ProfileComponent,
        CalenderComponent,
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        AppsRoutingModule
    ],
    exports: [],
    providers: [],
})
export class AppsModule { }