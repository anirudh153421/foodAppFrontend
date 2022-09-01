import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.css']
})
export class DisplayOrdersComponent implements OnInit {

  constructor(private service:AdminserviceService) { }
    result:any
    items:any
    count:any
  ngOnInit(): void {
    this.service.getOrders().subscribe((res:any)=>{
      for(let item of res.data){
        this.count++;
      }

this.result=res.data
this.items=this.result.data
console.log(this.items+"   loggg");

console.log(this.result);
    })
  }

}
