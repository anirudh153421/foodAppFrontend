import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  constructor(private service:AdminserviceService,private route:ActivatedRoute,private router:Router) { }
admin:any
id:any
  ngOnInit(): void {
    let id=this.route.snapshot.params["id"];
    this.id=id;
    console.log(id);
    this.service.getAdminById(id).subscribe((res:any)=>{
this.admin=res.data;
    })
  }
editAdmin(form:NgForm){
     return this.service.editAdmin(form.value,this.id).subscribe((res:any)=>{
      console.log(res);
      window.alert(res.message)
      this.router.navigateByUrl("/admindetails")
     },(error:any)=>{
      window.alert(error.message)
    }) 
}
}
