import { OnInit } from '@angular/core';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/shared/models/status';
import { Task } from 'src/app/shared/models/task';
import { EnumToArrayPipe } from 'src/app/shared/pipes/enumToArray.pipe';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskForm! : FormGroup
  
  Status = Status
  enumKeys = []
  
  constructor(private fb: FormBuilder,private enumToArray:EnumToArrayPipe){

  }

  ngOnInit(): void {
      this.enumKeys = this.enumToArray.transform(Status);

      this.taskForm = this.fb.group({
        title: ['',Validators.required],
        status:[null,Validators.required],
        collabs:[[]]
      })
  }

  createTask():void{
      if(this.taskForm.valid){
        const formData = this.taskForm.value;
        const newTask: Task = {
          title:formData.title,
          status:formData.status,
          collabs:formData.collabs
        };

        console.log('newTaks',newTask);

      }
      else{
        console.error('Form is invalid')
      }
  }

}
