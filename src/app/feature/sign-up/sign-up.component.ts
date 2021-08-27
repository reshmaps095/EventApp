import { ApiService } from './../../core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { AuthService } from 'src/app/core/services/auth.service';
declare var $:any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  submitted: boolean;
  signupForm: any;
  phoneerror: boolean;
  loading: boolean;
  message: any;
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  passwordcheck: boolean;
  duplicatemailorphone: boolean;
  showPassword: boolean = false;
  showPasswordRetype: boolean = false;
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private router:Router,private apiService:ApiService,public authService: AuthService) {
    this.signupForm = this.fb.group({
      name:['', [Validators.required]] ,
      email: ['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
      address:['', [Validators.required]] ,
      phone:['', [Validators.required,Validators.pattern("^[0-9]*$")]] ,
      password:['', [Validators.required]],
      retype_password:['', [Validators.required]] ,
    })
  }
  ngOnInit(): void {
  }
  get paymntfrm() {
    return this.signupForm.controls;
  }
  checkphoneNumValidation(){
    if(this.signupForm.value.phone.number.length < 8){
      this.phoneerror = true;
    }
    else{
      this.phoneerror = false;
    }
  }
  checkPassword(){
    let submitFormVal =  this.signupForm.value
    if(submitFormVal.password === submitFormVal.retype_password){
      this.passwordcheck = false;
      console.log("llllllll")
    }
    else{
      this.passwordcheck = true;
      console.log("pppppppp")

    }

  }
   togglePassword() {
    this.showPassword = !this.showPassword;
  }
  toggleRetypePassword() {
    this.showPasswordRetype = !this.showPasswordRetype;
  }

  signUp(){
    this.submitted = true;
    const formData = new FormData();
    if (this.signupForm.invalid) {
    }
    let submitFormVal =  this.signupForm.value
    if(this.signupForm.invalid === false){
      this.loading = true;
    }
    formData.append('name', submitFormVal.name);
    formData.append('email', submitFormVal.email);
    formData.append('phone_number', submitFormVal.phone.number);
    formData.append('country_code', submitFormVal.phone.dialCode);
    formData.append('password', submitFormVal.password);
    formData.append('address', submitFormVal.address);
    console.log(this.signupForm.controls)
    console.log("aaaaaaaaaaaaaaaaa")
    if(submitFormVal.password === submitFormVal.retype_password){
    this.apiService.signupUser(formData).subscribe((res:any)=>{
       if (res.success == 1) {
        if(this.message = 'Phone number or Email already taken')
        {
          this.duplicatemailorphone = true;
        }
        else{
         this.duplicatemailorphone = false;
        }
         this.signupForm.reset();
         this.submitted = false;
         this.loading = false;
         this.passwordcheck = false;
         $('#successModal').modal('show');

        } else  if (res.success == false)  {
          this.message = res.message;
          if(this.message = 'Phone number or Email already taken')
          {
            this.duplicatemailorphone = true;
          }
          else{
           this.duplicatemailorphone = false;
          }
       }
     }, error => {
     })
    }
  }
  loginUser(){
    this.router.navigateByUrl('/login')
  }
  closeSignUpModal(){
    $('#successModal').modal('hide');

  }
}
