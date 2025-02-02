import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  doj = "";
  dob = "";

  employee: Employee = {
    employeeId: 0,
    fName: "",
    lName: "",
    gender: "",
    dateOfBirth: new Date("02/03/2019"),
    dateJoined: new Date("02/03/2019"),
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    code: "",
  }

  Title: string = "Update Details ";

  constructor(
    private _employeeservice: EmployeeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }


  ngOnInit(): void {

    this._route.paramMap.subscribe(parametermMap => {
      const id = parametermMap.get('id');
      this._employeeservice.getEmployee(id).subscribe(
        (response) => this.employee = response,
        (error) => console.log(error),
      );
    });
  }

  // Method to update and employee
  updateEmployee() {
    this._employeeservice.updateEmployee(this.employee);
    //console.error(this.employee.firstName);
    this._router.navigate(['/nav/employees']);
  }

}
