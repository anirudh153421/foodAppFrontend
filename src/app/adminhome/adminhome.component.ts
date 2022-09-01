import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
    entity:any
    role:any
  constructor(private service:AdminserviceService,private route:Router) { }

  ngOnInit(): void {
    const role=localStorage.getItem("role");
    const id=localStorage.getItem("id");
    if(role==="admin"){
      this.service.getAdminById(id).subscribe((res:any)=>{
        this.entity=`Admin : ${res.data.name}`;
      })
    }
    if(role==="manager"){
      this.service.getManagerByID(id).subscribe((res:any)=>{
        this.role='manager';
        this.entity=`Manager : ${res.data.name}`;
      })
    }
    if(role==="staff"){
      this.service.getStaffByID(id).subscribe((res:any)=>{
        this.entity=`Staff : ${res.data.name}`;
      })
    }
  
  }
  logout(){
    localStorage.removeItem("role")
    localStorage.removeItem("id")
  }
   
  getStaff(){
  this.route.navigateByUrl("/showstaffbymid")
  }
  getUserdetails(){
    this.route.navigateByUrl('/userdetails')
  }
}
