import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }
  
  getEmployees(){
 return [
{"id":1,"name":"andrew","age":30},
{"id":2,"name":"barton","age":25}
];


 }
}
