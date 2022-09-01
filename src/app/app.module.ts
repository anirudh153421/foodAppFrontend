import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
import { Router } from '@angular/router';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddorderComponent } from './addorder/addorder.component';
import { ManagerdetailsComponent } from './managerdetails/managerdetails.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { StaffdetailsbymanagerComponent } from './staffdetailsbymanager/staffdetailsbymanager.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DisplayOrdersComponent } from './display-orders/display-orders.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDetailsComponent,
    NavbarComponent,
    AddAdminComponent,
    AdminhomeComponent,
    AdminloginComponent,
    ManagerloginComponent,
    StaffloginComponent,
    AddManagerComponent,
    AddstaffComponent,
    AddproductComponent,
    AddcustomerComponent,
    AddorderComponent,
    ManagerdetailsComponent,
    StaffdetailsComponent,
    StaffdetailsbymanagerComponent,
    ProductDetailsComponent,
    DisplayOrdersComponent,
    AddMenuComponent,
    EditAdminComponent,
    EditManagerComponent,
    EditStaffComponent,
    EditUserComponent,
    EditProductComponent,
    UserDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
