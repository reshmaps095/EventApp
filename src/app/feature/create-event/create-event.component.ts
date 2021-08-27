import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
declare var $:any;
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  submitted: boolean;
  CreateEventForm: any;
  loading: boolean;
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private apiService:ApiService,private router:Router) {
    this.CreateEventForm = this.fb.group({
      title: ['',[Validators.required]],
      date: ['',[Validators.required]],
  })
}
  ngOnInit(): void {
  }
  get eventfrm() {
    return this.CreateEventForm.controls;
  }
  openEventModal(){
    $('#evntModal').modal('show');

  }
  createEvent(event){
    this.submitted = true;
    const formData = new FormData();
    if (this.CreateEventForm.invalid) {
    }
    let submitFormVal =  this.CreateEventForm.value
    if(this.CreateEventForm.invalid === false){
      this.loading = true;
    }
  }
  closeEventModal(){
    $('#evntModal').modal('hide');
    this.CreateEventForm.reset();
    this.submitted = false;
    this.loading= false;
  }
}
