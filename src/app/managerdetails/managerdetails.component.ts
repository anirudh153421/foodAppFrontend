import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-managerdetails',
  templateUrl: './managerdetails.component.html',
  styleUrls: ['./managerdetails.component.css']
})
export class ManagerdetailsComponent implements OnInit {

  constructor(private service:AdminserviceService,private route:Router) { }
result:any
  ngOnInit(): void {
    this.service.getManagers().subscribe((res:any)=>{
      this.result=res.data;
      console.log(res);      
    })
  }
  
}
