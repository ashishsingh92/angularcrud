import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  employeeToDisplay: Employee;
  private arrayIndex = 1;
  dataFromChild: string;
  constructor(private _employeeService: EmployeeService,
              private _routerService: Router) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.employeeToDisplay = this.employees[0];
  }

  nextEmployee(): void {
    if (this.arrayIndex <= 2) {
      this.employeeToDisplay  = this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      this.employeeToDisplay =  this.employees[0];
      this.arrayIndex = 1;
    }
  }

  handleNotify(eventData: string) {
    this.dataFromChild = eventData;
  }

  onClick(employeeId: number) {
    this._routerService.navigate(['/employees', employeeId]);
  }
}
