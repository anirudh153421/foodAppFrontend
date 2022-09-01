import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../Services/authservice.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.css']
})
export class ManagerloginComponent implements OnInit {

  constructor(private service:LoginService,private auth:AuthserviceService,private router:Router) { }
manager:any
error:any;
  ngOnInit(): void {
  }
  managerLogin=new FormGroup({
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })
  getCredentials(){
    console.log(this.managerLogin.value);
    
      return this.service.managerLogin(this.managerLogin.value.email,this.managerLogin.value.password).subscribe((res)=>{
        this.manager=res
        localStorage.setItem("role",this.manager.data.role)
        console.log(res);
        if(this.auth.isManager()){
          localStorage.setItem("id",this.manager.data.id)
            this.router.navigateByUrl("/adminhome")
        }
       
      },(error)=>{
        this.error=error;
        window.alert('Invalid credentials');
      })
  }
}
