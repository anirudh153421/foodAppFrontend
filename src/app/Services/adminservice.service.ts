import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  saveUser(user: any) {
    return this.http.post(`http://localhost:8080/saveuser`,user)
  }

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(`http://localhost:8080/getadmins`)
  }
    saveadmin(admin:any){
      return this.http.post(`http://localhost:8080/saveadmin`,admin)
    }
    savemanager(manager:any,id:any){
      return this.http.post(`http://localhost:8080/savebranchManager/${id}`,manager)
    }
    saveStaff(staff:any,id:any){
      return this.http.post(`http://localhost:8080/savestaff/${id}`,staff)
    }
    saveProduct(prod:any){
      return this.http.post(`http://localhost:8080/saveitem`,prod)
    }
    saveOrder(order:any,staff:any,user:any,items:any=[]){
      return this.http.post(`http://localhost:8080/savefoodOrder/staff:${staff}/user:${user}?ids=${items}`,order)
    }
    getManagers(){
      return this.http.get(`http://localhost:8080/getbranchManagers`)
    }
    getStaffByManagerID(id:any){
      return this.http.get(`http://localhost:8080/getstaffbymid/${id}`)
    }
    getAdminById(id:any){
      return this.http.get(`http://localhost:8080/getadmin/${id}`)
    }
    getManagerByID(id:any){
      return this.http.get(`http://localhost:8080/getbranchManager/${id}`)
    }
    getStaffByID(id:any){
      return this.http.get(`http://localhost:8080/getstaff/${id}`)
    }
    getAllStaff(){
      return this.http.get(`http://localhost:8080/getstaffs`)
    }
    getProducts(){
      return this.http.get(`http://localhost:8080/getitems`)
    }
    saveMenu(menu:any,id:any){
      return this.http.post(`http://localhost:8080/savemenu/${id}`,menu)
    }
    editAdmin(admin:any,id:any){
        return this.http.put(`http://localhost:8080/updateadmin/${id}`,admin)
    }
    getOrders(){
      return this.http.get(`http://localhost:8080/getfoodOrders`)
    }
    editManager(manager:any,id:any,aid:any){
      return this.http.put(`http://localhost:8080/updatebranchManager/${id}/${aid}`,manager)
    }
    editStaff(staff:any,id:any,mid:any){
      return this.http.put(`http://localhost:8080/updatestaff/${id}/${mid}`,staff)
    }
    editUser(user:any,id:any){
      return this.http.put(`http://localhost:8080/updateuser/${id}`,user)
    }
    getUsers(){
      return this.http.get(`http://localhost:8080/getusers`)
    }
    getUserByID(id:any){
      return this.http.get(`http://localhost:8080/getuser/${id}`)
    }
    generateMail(id:any){
      return this.http.get(`http://localhost:8080/mailfoodOrder/${id}`)
    }
}
