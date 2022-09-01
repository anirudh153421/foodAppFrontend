import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private service:AdminserviceService) { }

  ngOnInit(): void {
  }
adminForm=new FormGroup({
name:new FormControl("",[Validators.required]),
email:new FormControl("",[Validators.required,Validators.email]),
password:new FormControl("",[Validators.required]),


})
  addAdmin(){
    return this.service.saveadmin(this.adminForm.value).subscribe((res:any)=>{
      window.alert(res.message)
      console.log(res);
      
    },(error:any)=>{
      window.alert(error.message)
    })
  }
}
