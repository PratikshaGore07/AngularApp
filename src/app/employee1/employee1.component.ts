import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee1.component.html',
  styleUrl: './employee1.component.css'
})
export class Employee1Component {
  employee:Employee=new Employee(0,'',0)
  constructor(private service:EmployeeService) {
    
  }
  saveEmployee(){
    this.service.saveEmployee(this.employee).subscribe();
  }
}