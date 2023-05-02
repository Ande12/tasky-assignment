import { Injectable } from '@angular/core';
import { LocalstoreService } from '../localstorage/localstore.service';
import { Itask } from 'src/app/interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private store: LocalstoreService) { }

  // add task
  addTask(task: Itask){
    let allTask = this.store.get('Task');
    if(allTask.status && allTask.data.length > 1){
      allTask.data.push(task);
      this.store.set('Task', allTask);
      return;
    }
    this.store.set('Task', [task]);
    return;
  }
}
