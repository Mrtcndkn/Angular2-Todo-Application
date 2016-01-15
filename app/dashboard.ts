import {Component} from 'angular2/core';
import {TaskService} from './task.service';
import {Task} from './task';
import {OnInit} from 'angular2/core';
import {TaskDisplayComponent} from './taskdisplay.component';

@Component({
	selector: 'manage',
	template:`
		<div class="container">
			<table class="table table-striped">
	    		<tr>
	    			<th>Task</th>
	    			<th>Due date</th>
	    			<th>Status</th>
	    		</tr>
	    		<tr *ngFor="#task of tasks" (click)="setSelectedTask(task)">
	    			<td>{{task.name}}</td>
	    			<td>{{task.dueDate}}</td>
	    			<td [class.done]="task.done">{{task.done ? 'IT\\'s DONE' : 'WORKING ON IT'}}</td>
	    			<td><button style="margin:10px 0 0 50px;"class="btn btn-primary" (click)="task.done = !task.done">{{task.done ? 'Undo' : 'Done'}}</button></td>
	    		</tr>
	    	</table>
	    	<task-display [task]="selectedTask"></task-display>
	    </div>
	`,
	providers: [TaskService],
	directives: [TaskDisplayComponent],
	styles: [
		`
    		.done {
    			color: green;
    		}
    	`
    ]
})
export class Dashboard {

	tasks: Task[] = [];
	selectedTask: Task = null;

	constructor(private _taskService: TaskService){}

	ngOnInit() {
		this._taskService.getTasks().then(tasks => this.tasks = tasks);
	}

	setSelectedTask(task: Task) {
		this.selectedTask = task;
	}

}