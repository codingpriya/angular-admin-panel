import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailMessagesComponent } from './shared/components/email-messages/email-messages.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { LanguagesComponent } from './shared/components/languages/languages.component';
import { ProfileDropdownComponent } from './shared/components/profile-dropdown/profile-dropdown.component';

const components = [
    EmailMessagesComponent,
    NotificationsComponent,
    LanguagesComponent,
    ProfileDropdownComponent
];

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: components,
  entryComponents: [
  ],
  exports: components,
  
})
export class HeaderRightSharedModule { }