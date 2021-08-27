import { SidebarModule } from './sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './feature/landing-page/landing-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './feature/login/login.component';
import { SignUpComponent } from './feature/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './feature/home/home.component';
import { CreateEventComponent } from './feature/create-event/create-event.component';
import { MyEventsComponent } from './feature/my-events/my-events.component';
const config = {
   apiKey: "AIzaSyCc2CgBAjUs06bACR20V1sZhnQBn7i1cZs",
  authDomain: "prezenty-65dea.firebaseapp.com",
  projectId: "prezenty-65dea",
  storageBucket: "prezenty-65dea.appspot.com",
  messagingSenderId: "635148394294",
  appId: "1:635148394294:web:351de9f1eb14bb651a9d97"
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AdminLayoutComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    CreateEventComponent,
    MyEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarModule,
    NavbarModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(config),
    HttpClientModule,
    CarouselModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
