import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddorderComponent } from './addorder/addorder.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DisplayOrdersComponent } from './display-orders/display-orders.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminGuardGuard } from './Guards/admin-guard.guard';
import { ManagerGuardGuard } from './Guards/manager-guard.guard';
import { StaffGuardGuard } from './Guards/staff-guard.guard';
import { LoginComponent } from './login/login.component';
import { ManagerdetailsComponent } from './managerdetails/managerdetails.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { StaffdetailsbymanagerComponent } from './staffdetailsbymanager/staffdetailsbymanager.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  
  {path:"adminhome",component:AdminhomeComponent},
  {path:"admindetails",component:AdminDetailsComponent,canActivate:[AdminGuardGuard]},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"managerlogin",component:ManagerloginComponent},
  {path:"stafflogin",component:StaffloginComponent},
  {path:"addmanager",component:AddManagerComponent,canActivate:[AdminGuardGuard]},
  {path:"addstaff",component:AddstaffComponent,canActivate:[ManagerGuardGuard]},
  {path:"addproduct",component:AddproductComponent,canActivate:[ManagerGuardGuard]},
  {path:"adduser",component:AddcustomerComponent,canActivate:[StaffGuardGuard]},
  {path:"addorder",component:AddorderComponent,canActivate:[StaffGuardGuard]},
  {path:"displaymanagers",component:ManagerdetailsComponent,canActivate:[AdminGuardGuard]},
  {path:"displaystaff",component:StaffdetailsComponent,canActivate:[ManagerGuardGuard]},
  {path:"showstaffbymid",component:StaffdetailsbymanagerComponent,canActivate:[ManagerGuardGuard]},
  {path:"displayproducts",component:ProductDetailsComponent,canActivate:[StaffGuardGuard ]},
  {path:"addmenu",component:AddMenuComponent,canActivate:[ManagerGuardGuard]},
  {path:"displayorders",component:DisplayOrdersComponent,canActivate:[ManagerGuardGuard]},
  {path:"editmanager/:id",component:EditManagerComponent},
  {path:"editadmin/:id",component:EditAdminComponent},
  {path:"editstaff/:id",component:EditStaffComponent},
  {path:"userdetails",component:UserDetailsComponent,canActivate:[StaffGuardGuard]},
  {path:"edituser/:id",component:EditUserComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
{path:"login",component:LoginComponent},
{path:"saveadmin",component:AddAdminComponent,canActivate:[AdminGuardGuard]},
{path:"**",component:NavbarComponent},
{path:"home",component:NavbarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
