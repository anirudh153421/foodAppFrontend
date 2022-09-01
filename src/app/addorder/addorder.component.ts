import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  constructor(private service:AdminserviceService) {}
get itemControls(){
  return (<FormArray>this.orderForm.get('items')).controls
}
  ngOnInit(): void {

  }
statusForm=new FormGroup({
  status:new FormControl("",[Validators.required])
})

  orderForm=new FormGroup({
    
    staffid:new FormControl("",[Validators.required]),
    userid:new FormControl("",[Validators.required]),
    items:new FormArray([])
    })


    addOrder(){
        console.log(this.orderForm.value);
        
      return this.service.saveOrder(this.statusForm.value,this.orderForm.value.staffid,this.orderForm.value.userid,this.orderForm.value.items).subscribe((res:any)=>{
        console.log(res);
        window.alert(res.message)
        this.service.generateMail(res.data.id).subscribe((mail:any)=>{
          console.log(mail);
          window.alert(mail.message)
        },(error:any)=>{
          window.alert(error.message)
        })
      },(error:any)=>{
        window.alert(error.message)
      })
    }
    onAddItems(){
      const control=new FormControl("",[Validators.required]);
      (<FormArray>this.orderForm.get('items')).push(control)
    }
}
