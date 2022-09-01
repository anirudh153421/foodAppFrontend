import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../Services/authservice.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})
export class StaffloginComponent implements OnInit {

  constructor(private service:LoginService,private auth:AuthserviceService,private router:Router) { }
staff:any
  ngOnInit(): void {
  }
  staffLogin=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required])
  })

  getCredentials(){
    console.log(this.staffLogin.value);
    
      return this.service.staffLogin(this.staffLogin.value.email,this.staffLogin.value.password).subscribe((res)=>{
        this.staff=res
        localStorage.setItem("role",this.staff.data.role)
        console.log(res);
        if(this.auth.isStaff()){
          localStorage.setItem("id",this.staff.data.id)
            this.router.navigateByUrl("/adminhome")
        }
        
        
      },(error)=>{
        window.alert('Invalid credentials');
      })
  }
}
