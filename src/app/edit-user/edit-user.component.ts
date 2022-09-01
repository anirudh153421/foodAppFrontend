import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private service:AdminserviceService,private route:Router,private router:ActivatedRoute) { }
user:any
id:any
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.service.getUserByID(this.id).subscribe((res:any)=>{
      this.user=res.data;
      console.log(this.user);
    })
  }
  editUser(form:NgForm){
    return this.service.editUser(form.value,this.id).subscribe((res:any)=>{
      console.log(res);
      window.alert(res.message)
    },(error:any)=>{
      window.alert(error.message)
    })
  }
}
