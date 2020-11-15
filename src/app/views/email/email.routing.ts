import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmailComposeComponent } from './email-compose/email-compose.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { EmailReadComponent } from './email-read/email-read.component';

const routes: Routes = [
    {
        path: 'email-compose',
        component: EmailComposeComponent,
        data: { title: 'Email Compose' }
    },
    {
        path: 'email-inbox',
        component: EmailInboxComponent,
        data: { title: 'Email Inbox' }
    },
    {
        path: 'email-read',
        component: EmailReadComponent,
        data: { title: 'Email Read' }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class EmailRoutingModule { }