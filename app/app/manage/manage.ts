import {Component} from 'angular2/core';
import {Task} from '../../task/task';
import {TaskService} from '../../task/task.service';

@Component({
	selector: 'manage',
	template:`
		<div class="container">
			<div class="form-group">
				<label for="Todo">To-Do</label>
				<input type="text" [(ngModel)]="newTask.name" class="form-control" placeholder="What To Do?"/>
			</div>
	    	<div class="form-group">
	    		<label for="Due">Due-date</label>
	    		<input type="date" [(ngModel)]="newTask.dueDate" class="form-control" style="width:15%;"/>
	    	</div>
	    	<button class="btn btn-success" (click)="addTask(newTask)">Add Task</button>
	    	<div class="alert alert-success" role="alert" *ngIf="message" style="margin-top:20px;">
	    		{{message}}
	    	</div>
	    </div>
	`,
	providers: [TaskService]
})

export class Manage {

	message: string;
	public newTask: Task = {
        done: false;
    };

	constructor(private _taskService: TaskService) { }
	
    addTask(newTask: Task) {
        this._taskService.addTask(newTask);
        this.message = "To Do Item Added Successfully!";
    }
}