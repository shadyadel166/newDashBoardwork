import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAdminLogin } from '../Model/IUser';
import { IResultApi } from './../Model/IResultApi';

@Injectable({
  providedIn: 'root'
})
export class ApiAdminService {
  dataBaseUrl= "http://localhost:8000/users"

constructor(private Http:HttpClient) { }

Register(Admin:IAdminLogin){
  return this.Http.post<IResultApi<any>>(this.dataBaseUrl+"/register", Admin)

}

Login(Admin:IAdminLogin){
  return this.Http.post<IResultApi<any>>(this.dataBaseUrl+"/login", Admin)
}
}
