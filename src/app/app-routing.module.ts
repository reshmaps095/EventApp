import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './feature/landing-page/landing-page.component';
import { LoginComponent } from './feature/login/login.component';
import { SignUpComponent } from './feature/sign-up/sign-up.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  // { path: 'landing-page',  component: LandingPageComponent,  },
  // { path: 'sign-up',  component: SignUpComponent,  },
  // { path: 'login',  component: LoginComponent,  },
  // { path: 'home',  component: HomeComponent,  },
  {
    path: 'landing-page',
    component: LandingPageComponent,

  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    redirectTo: 'home',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) ,
      // loadChildren:'./layouts/admin-layout/admin-layout.module#AdminLayoutModule',
    }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

