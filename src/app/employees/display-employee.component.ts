import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})

  // export class DisplayEmployeeComponent implements OnInit, OnChanges {

  export class DisplayEmployeeComponent implements OnInit {
  private selectedEmployeeId: number;
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
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  // }

  // @Output() method
  // handleClick() {
  //   this.notify.emit(this.employee.name);
  // }
}
