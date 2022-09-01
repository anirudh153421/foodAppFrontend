import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor(private service:AdminserviceService) { }

  ngOnInit(): void {
  }
  userForm=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required])
})

addUser(){
  return this.service.saveUser(this.userForm.value).subscribe((res:any)=>{
      window.alert(res.message)
    console.log(res);
    
  },(error:any)=>{
    window.alert(error.message)
  })
}
}
