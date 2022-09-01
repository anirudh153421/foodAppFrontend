import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {
manager:any
id:any
aid:any

  constructor(private service:AdminserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params["id"];
    this.id=id;
    console.log(id);
    this.aid=localStorage.getItem('id')
    this.service.getManagerByID(id).subscribe((res:any)=>{
this.manager=res.data;
    })
  }
  editmanager(form:NgForm){
    return this.service.editManager(form.value,this.id,this.aid).subscribe((res:any)=>{
     console.log(res);
     window.alert(res.message)
     this.router.navigateByUrl("/displaymanagers")
    },(error:any)=>{
      window.alert(error.message)
    }) 
}
}
