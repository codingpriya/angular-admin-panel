import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './shared/components/logo/logo.component';
import { HeaderContentComponent } from './shared/components/header-content/header-content.component';
import { NavToggleComponent } from './shared/components/nav-toggle/nav-toggle.component';
import { HeaderLeftComponent } from './shared/components/header-left/header-left.component';
import { HeaderRightComponent } from './shared/components/header-right/header-right.component';
import { HeaderRightSharedModule } from './shared/components/header-right/header-right-shared.module';
import { HeaderComponent } from './header.component';

const components = [
    LogoComponent,
    HeaderContentComponent,
    NavToggleComponent,
    HeaderLeftComponent,
    HeaderRightComponent,
    HeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    HeaderRightSharedModule
  ],

  declarations: components,
  entryComponents: [
  ],
  exports: [
    components,
    HeaderRightSharedModule
  ]
})
export class HeaderSharedModule { }