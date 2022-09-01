import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
// getResponse(){
//   return this.http.get(`http://localhost:8080/getadmin/${email}/${password}`)
// }
adminLogin(email:any,password:any){
  return this.http.get(`http://localhost:8080/adminlogin/${email}/${password}`)
}
managerLogin(email:any,password:any){
  return this.http.get(`http://localhost:8080/managerlogin/${email}/${password}`)
}
staffLogin(email:any,password:any){
  return this.http.get(`http://localhost:8080/loginstaff/${email}/${password}`)
}
}
