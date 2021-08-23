import { Injectable } from '@angular/core';
import TASKS from '../MockTasks';
import { Task, ITask } from 'src/models/Task';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS)
    return tasks
  }
  deleteTask(id: number) {

  }
}
