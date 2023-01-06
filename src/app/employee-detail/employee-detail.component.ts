import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
//public employees=[
//{"id":1,"name":"andrew","age":30},
//{"id":2,"name":"barton","age":25}
//];

public employees=[];

  constructor(private _employeeService:EmployeeService) { }

ngOnInit():void{
  this.employees=this._employeeService.getEmployees();
  }

}
