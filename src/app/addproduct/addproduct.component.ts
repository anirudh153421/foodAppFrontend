import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private service:AdminserviceService) { }

  ngOnInit(): void {
  }
  prodForm=new FormGroup({
    name:new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required]),
    availability:new FormControl("",[Validators.required]),
    price:new FormControl("",[Validators.required]),
    quantity:new FormControl("",[Validators.required])
    })
    addprod(){
      return this.service.saveProduct(this.prodForm.value).subscribe((res)=>{
        console.log(res);
        
      })
    }
}
