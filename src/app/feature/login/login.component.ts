import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  submitted: boolean;
  loading: boolean;
  message: any;
  invalidMessage: boolean;

  constructor(private fb: FormBuilder,private route:ActivatedRoute,private router:Router,private apiService:ApiService) {
    this.loginForm = this.fb.group({
      password:['', [Validators.required]] ,
      email: ['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
    })
  }
  ngOnInit(): void {
  }
  get loginfrm() {
    return this.loginForm.controls;
  }
  login(){
    this.submitted = true;
    const formData = new FormData();
    if (this.loginForm.invalid) {
    }
    let submitFormVal =  this.loginForm.value
    if(this.loginForm.invalid === false){
      this.loading = true;
    }
    formData.append('password', submitFormVal.password);
    formData.append('email', submitFormVal.email);
    console.log("aaaaaaaaaaaaaaaaa")
    this.apiService.loginUser(formData).subscribe((res:any)=>{
       if (res.success == 1) {
         this.loginForm.reset();
         this.submitted = false;
         this.loading = false;
         this.message = res.message;
         console.log(this.message)
         this.invalidMessage = false;
         this.router.navigateByUrl('/sign-up')

        } else {
          console.log("ssssssss")
         this.invalidMessage = true;
       }
     }, error => {
     })

  }
  signUp(){
    this.router.navigateByUrl('/sign-up')

  }
}
