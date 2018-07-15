import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employeedetail',
  template: `
    <h1>EMployee List</h1>
      <h3>{{errorMsg}}</h3>
      <ul *ngFor="let employee of employees">
          <li>{{employee.id}}. {{employee.name}}</li>
      </ul>
  `,
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

    public employees = [];
    public errorMsg;

    constructor(private _employeeService: EmployeeService) { }

    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
    }

}
