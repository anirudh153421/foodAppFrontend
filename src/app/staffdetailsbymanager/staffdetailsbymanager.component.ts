import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-staffdetailsbymanager',
  templateUrl: './staffdetailsbymanager.component.html',
  styleUrls: ['./staffdetailsbymanager.component.css']
})
export class StaffdetailsbymanagerComponent implements OnInit {

  constructor(private service:AdminserviceService,private route:Router) { }
result:any
  ngOnInit(): void {
    if(localStorage.getItem("role")==="manager"){
      this.service.getStaffByManagerID(localStorage.getItem("id")).subscribe((res:any)=>{
        this.result=res.data;
        console.log(res);      
      })
    }
  }

}
