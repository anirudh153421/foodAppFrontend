import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  userForm:any;
  userObj:any;
  result:any;
  error:any;
  id:any
  constructor(private router:Router,private service:AdminserviceService) {
    this.id=localStorage.getItem('id');
   }

  ngOnInit(): void {
    this.userForm=new FormGroup({
      items:new FormArray([
        new FormGroup({
          availability:new FormControl(""),
          name:new FormControl(""),
          description:new FormControl(""),
          price:new FormControl(""),
          quantity:new FormControl("")
        })
      ]),
    });
  }
  addItem(){
    const control=<FormArray>this.userForm.controls['items'];
    control.push(
      new FormGroup({
        availability:new FormControl(""),
        name:new FormControl(""),
        description:new FormControl(""),
        price:new FormControl(""),
        quantity:new FormControl("")
      })
    );
  }

  removeItem(index:any){
    const control=<FormArray>this.userForm.controls['items'];
    control.removeAt(index);
  }

  addMenu(){
    const emp=this.userForm.value;
    this.service.saveMenu(emp,this.id).subscribe((result)=>{
      this.result=result
      window.alert(this.result.message); 
      this.router.navigate([("menus")])
    },(error)=>{
      this.error=error;
      window.alert(this.error.message);
    })
  }

}
