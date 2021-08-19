import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './feature/landing-page/landing-page.component';
import { LoginComponent } from './feature/login/login.component';
import { SignUpComponent } from './feature/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page',  component: LandingPageComponent,  },
  { path: 'sign-up',  component: SignUpComponent,  },
  { path: 'login',  component: LoginComponent,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

