import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        LockScreenComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    exports: [],
    providers: [],
})
export class PagesModule { }