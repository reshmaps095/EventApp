import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
var loginToken = localStorage.getItem("LoginToken")
var httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer "  + loginToken,
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public  BASE_URL= 'https://www.cocoalabs.in/event/api/web/v1/'

  constructor(private http: HttpClient) { }

  signupUser(data){
    for(let val of data){
    console.log(val)
  }
    return this.http.post(this.BASE_URL + `user/sign-up`,data)
  }
  loginUser(data){
    return this.http.post(this.BASE_URL + `user/login`,data)
  }
  loginWIthGoogle(data){
    return this.http.post(this.BASE_URL + `user/social`,data)
  }
}
