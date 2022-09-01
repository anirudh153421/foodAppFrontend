import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../Services/authservice.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private service:LoginService,private auth:AuthserviceService,private router:Router) { }
admin:any
  ngOnInit(): void {
  }
  adminLogin=new FormGroup({
    email:new FormControl("",[Validators.required , Validators.email]),
    password:new FormControl("",[Validators.required])
  })
  getCredentials(){
    // console.log(this.adminLogin.value);
      return this.service.adminLogin(this.adminLogin.value.email,this.adminLogin.value.password).subscribe((res)=>{
        this.admin=res
        localStorage.setItem("role",this.admin.data.role)
        console.log(res);
        if(this.auth.isAdmin()){
              localStorage.setItem("id",this.admin.data.id);
            this.router.navigateByUrl("/adminhome")
        }
       
       
        
      },(error)=>{
       console.log(error);
        window.alert('Invalid credentials');
      })
  }
  getEmail(){
   return this.adminLogin.get('email');       
  }
  getPassword(){
    return this.adminLogin.get('password');
  }
}
