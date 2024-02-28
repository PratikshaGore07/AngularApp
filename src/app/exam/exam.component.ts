import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { QuestionmanagementComponent } from '../questionmanagement/questionmanagement.component';
import { TimemanagementComponent } from '../timemanagement/timemanagement.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {

}
