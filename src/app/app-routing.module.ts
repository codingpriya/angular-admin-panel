import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DefaultLayoutComponent } from './shared/components/layouts/default-layout/default-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'email',
        loadChildren: () => import('./views/email/email.module').then(m => m.EmailModule),
        data: { title: 'Email' }
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/apps/apps.module').then(m => m.AppsModule),
        data: { title: 'Apps' }
      }
    ] 
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule),
        data: { title: 'Pages' }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
