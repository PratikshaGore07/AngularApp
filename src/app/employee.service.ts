import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpclient:HttpClient) {

  }
  saveEmployee(employee:Employee){
  return this.httpclient.post("http://localhost:8080/saveEmployee" , employee)
  }
}

export class Employee{

 eid:number;
 name:string;
 salary:number;
 

 public constructor(eid:number,name:string,salary:number)
 {
   this.eid=eid;
   this.name=name;
   this.salary=salary;
  
 }
}