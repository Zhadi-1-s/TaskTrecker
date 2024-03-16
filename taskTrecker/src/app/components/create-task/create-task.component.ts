import { OnInit } from '@angular/core';
import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Status } from 'src/app/shared/models/status';
import { EnumToArrayPipe } from 'src/app/shared/pipes/enumToArray.pipe';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  
  Status = Status
  enumKeys = []
  
  constructor(private fb: FormBuilder,private enumToArray:EnumToArrayPipe){

  }

  ngOnInit(): void {
      this.enumKeys = this.enumToArray.transform(Status);
      console.log(this.enumKeys)
  }

  

}
