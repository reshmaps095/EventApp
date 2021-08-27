import { ApiService } from 'src/app/core/services/api.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationState = new BehaviorSubject<boolean>(false)
  private profileImage = new BehaviorSubject<any>('')
  userdetails:any;
  loginToken: any;

  constructor(
    public afAuth: AngularFireAuth,private router:Router,private apiService:ApiService) {}

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result: any) => {
      this.userdetails = result.user,
       console.log(this.userdetails.email)
       var data ={
        photoURL: this.userdetails?.photoURL,
        email:this.userdetails?.email,
        displayName:this.userdetails?.displayName,
        phoneNumber:this.userdetails?.phoneNumber,
        uid:this.userdetails?.uid,
        accessToken: result.credential?.accessToken
       }
       localStorage.setItem("userDetails", JSON.stringify(data))
       console.log(data)
       const formData = new FormData();
       formData.append('email', data.email);
       this.apiService.loginWIthGoogle(formData).subscribe((res:any)=>{
        if (res.success == 1) {
          this.router.navigateByUrl('/home')
          this.loginToken = res.apiToken;
          localStorage.setItem('loginToken',this.loginToken)
        }
      }, error => {
      })
      }).catch((error) => {
        console.log(error)
     })
  }
}
