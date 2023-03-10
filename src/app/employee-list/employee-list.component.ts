import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl:'./employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

//public employees=[
//{"id":1,"name":"andrew","age":30},
//{"id":2,"name":"barton","age":25}
//];


public employees=[];


  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(){
  this.employees=this._employeeService.getEmployees();
  }

}
