import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  constructor(private service:AdminserviceService,private route:ActivatedRoute,private router:Router) { }
staff:any
id:any
mid:any
  ngOnInit(): void {
    let id=this.route.snapshot.params["id"];
    this.id=id;
    console.log(id);
    this.mid=localStorage.getItem('id')
    this.service.getStaffByID(id).subscribe((res:any)=>{
this.staff=res.data;
    })
  }
  editStaff(form:NgForm){
    return this.service.editStaff(form.value,this.id,this.mid).subscribe((res:any)=>{
      console.log(res);
      window.alert(res.message)
      this.router.navigateByUrl("/displaystaff")
     },(error:any)=>{
      window.alert(error.message)
    }) 
  }

}
