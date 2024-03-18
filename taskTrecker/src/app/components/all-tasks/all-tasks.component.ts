import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit{

  tasks!:Task

  constructor(private taskService:TaskService){}

  ngOnInit(): void {
      this.taskService.getTasks('task').subscribe(
        data => {
          this.tasks = data,
          console.log(data)
        },
        error => {
          console.error(error.message)
        }
      )
  }

}
