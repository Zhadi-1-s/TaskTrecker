import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable,of } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  create(task:Task):void{
    localStorage.setItem('task',JSON.stringify(task))
  }

  getTasks(key:string):Observable<Task[]>{
    
    return of(localStorage.getItem(key)).pipe(
      
      map((tasksJson:String | null) => {
        
        if(tasksJson){
          return JSON.parse(tasksJson) as Task[];
        }
        
        else{
          return []
        }
      })
    )
  }
}
