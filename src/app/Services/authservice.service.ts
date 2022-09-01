import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }


isAdmin():boolean{
  if(localStorage.getItem("role")==="admin"){
    return true;
  }
  else{
    return false;
  }
}
isManager():boolean{
  if(localStorage.getItem("role")==="manager"){
    return true;
  }
  else{
    return false;
  }
}
isStaff():boolean{
  if(localStorage.getItem("role")==="staff"){
    return true;
  }
  else{
    return false;
  }
}
isUser():boolean{
  if(localStorage.getItem("role")==="user"){
    return true;
  }
  else{
    return false;
  }
}
}
