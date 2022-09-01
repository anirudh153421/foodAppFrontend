import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../Services/adminservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private service:AdminserviceService) { }
users:any
  ngOnInit(): void {
    this.service.getUsers().subscribe((res:any)=>{
      this.users=res.data
              window.alert(res.message)
              console.log(this.users);
              return
            },(error:any)=>{
              window.alert(error.message)
            })
  }

}
