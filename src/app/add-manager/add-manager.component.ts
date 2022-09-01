import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  constructor(private service:AdminserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  mgrForm=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required]),
    branch:new FormControl("",[Validators.required]),
    id:new FormControl("",[Validators.required])
    })
    addManager(){
      return this.service.savemanager(this.mgrForm.value,this.mgrForm.value.id).subscribe((res:any)=>{
        console.log(res.message);
        window.alert()
        this.route.navigateByUrl("/adminhome")
      },(error:any)=>{
        window.alert(error.message)
      })
    }

}
