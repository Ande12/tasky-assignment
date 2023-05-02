import { Component } from '@angular/core';
import { TaskDifficulty, TaskLevel, TaskStatus } from 'src/app/constants/constants.enum';
import { Itask } from 'src/app/interfaces/task.interface';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  constructor(private taskService: TaskService){}
  task: Itask = {
    name: '',
    description: '',
    dueDate: '',
    startDate: '',
    level: TaskLevel.NOT_STARTED,
    difficulty: TaskDifficulty.STANDARD,
    status: TaskStatus.PROCESSING,
    userId: ''
  }

  saveTask(){
    if(this.task.name.length < 5 || this.task.description.length < 20){
      alert('name or discription has insufficient length');
    }
    this.taskService.addTask(this.task);
  }
}
