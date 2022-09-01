import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
products:any
  constructor(private service:AdminserviceService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((res:any)=>{
      console.log(res);
      this.products=res.data
    })
  }

}
