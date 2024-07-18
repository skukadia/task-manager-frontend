import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../../models/task.model';
import { addTask } from '../../store/task.actions';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  task: Task = {
    id: '',
    title: '',
    description: '',
    dueDate: new Date(),
    priority: 'low',
    status: 'to-do',
    history: []
  };

  constructor(private store: Store) {}

  onSubmit() {
    this.task.id = new Date().getTime().toString();
    this.task.history.push({ timestamp: new Date(), change: 'Task created' });
    this.store.dispatch(addTask({ task: this.task }));
  }
}
