import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-staffdetails',
  templateUrl: './staffdetails.component.html',
  styleUrls: ['./staffdetails.component.css']
})
export class StaffdetailsComponent implements OnInit {

  constructor(private service:AdminserviceService,private route:Router) { }
result:any
  ngOnInit(): void {
            this.service.getAllStaff().subscribe((res:any)=>{
              this.result=res.data
              window.alert(res.message)
              console.log(this.result);
              return
            },(error:any)=>{
              window.alert(error.message)
            })
      

      
        
      
    
    
  }

}
