import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})

  // export class DisplayEmployeeComponent implements OnInit, OnChanges {

  export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  // Input change detection using property setter
  // private _employee: Employee;
  // set employee(val: Employee) {
  //   this._employee = val;
  // }
  // get employee(): Employee {
  //   return this._employee;
  // }
  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  // }

  // @Output() method
  // handleClick() {
  //   this.notify.emit(this.employee.name);
  // }
}
