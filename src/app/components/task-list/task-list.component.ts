import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { loadTasks, deleteTask } from '../../store/task.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private store: Store<{ task: { tasks: Task[] } }>) {
    this.tasks$ = this.store.select(state => state.task.tasks);
  }

  ngOnInit() {
    this.store.dispatch(loadTasks());
  }

  editTask(task: Task) {
    // Implement task editing functionality here
  }

  deleteTask(id: string) {
    this.store.dispatch(deleteTask({ id }));
  }
}
