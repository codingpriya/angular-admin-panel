import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailRoutingModule } from './email.routing';
import { EmailComposeComponent } from './email-compose/email-compose.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { EmailReadComponent } from './email-read/email-read.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [
        EmailComposeComponent,
        EmailInboxComponent,
        EmailReadComponent,
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        EmailRoutingModule
    ],
    exports: [],
    providers: [],
})
export class EmailModule { }