import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
result:any
id:any
  constructor(private service:AdminserviceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data:any)=>{
      console.log(data);
        this.result=data.data
    })
  }
      // addid(form:NgForm){
      //   console.log(form.value);
      //       form.value.id=this.id;

      // }
}
