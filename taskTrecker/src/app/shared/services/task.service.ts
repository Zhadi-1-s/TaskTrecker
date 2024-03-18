import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  setItem(key:string,task:Task):void{
    localStorage.setItem(key,task)
  }
}
