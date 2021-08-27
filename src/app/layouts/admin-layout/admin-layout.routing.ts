import { Routes } from '@angular/router';
import { CreateEventComponent } from 'src/app/feature/create-event/create-event.component';
import { HomeComponent } from 'src/app/feature/home/home.component';
import { IconsComponent } from 'src/app/feature/icons/icons.component';
import { MyEventsComponent } from 'src/app/feature/my-events/my-events.component';
import { SignUpComponent } from 'src/app/feature/sign-up/sign-up.component';
export const AdminLayoutRoutes: Routes = [

    {path: 'home',      component: HomeComponent,},
    { path: 'icons',    component: IconsComponent },
    { path: 'create-event',    component: CreateEventComponent },
    { path: 'my-event',    component: MyEventsComponent },


];
