import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSharedModule } from './header/header-shared.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { SharedMaterialModule } from '../shared-material.module';
import { RouterModule } from '@angular/router';

const components = [
  // BreadcrumbComponent,
  SideNavbarComponent,
  FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    HeaderSharedModule,
    SharedMaterialModule,
    RouterModule
  ],
  declarations: components,
  entryComponents: [],
  exports: [
    components,
    HeaderSharedModule
  ] 
})
export class SharedComponentsModule { }