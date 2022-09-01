import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {

  constructor(private service:AdminserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  staffForm=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required]),
    branch:new FormControl("",[Validators.required]),
    id:new FormControl("",[Validators.required])
    })
    addStaff(){
      return this.service.saveStaff(this.staffForm.value,this.staffForm.value.id).subscribe((res:any)=>{
        console.log(res);
        window.alert(res.message)
        // this.route.navigateByUrl("/adminhome")
      },(error:any)=>{
        window.alert(error.message)
      })
    
    }
}
