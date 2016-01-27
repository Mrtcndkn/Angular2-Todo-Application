import {Component} from 'angular2/core';
import {Task} from './task';

@Component({
	selector: 'task-display',
	template: `
		<div class="panel panel-default" *ngIf="task" style="margin-top:20px">
			<div class="panel-body">
				<div class="form-horizontal">
					<div class="form-group">
		    			<label class="col-sm-1 control-label">Title:</label>
		    			<div class="col-sm-11">
		    				<p class="form-control-static">{{task.name}}</p>
		    			</div>
		  			</div>
					<div class="form-group">
		    			<label class="col-sm-1 control-label">Director:</label>
		    			<div class="col-sm-11">
			   				<p class="form-control-static">{{task.dueDate}}</p>
		    			</div>
		  			</div>
					<div class="form-group">
		    			<label class="col-sm-1 control-label">Year:</label>
		    			<div class="col-sm-11">
			   				<p class="form-control-static">{{task.done}}</p>
		    			</div>
		  			</div>
				</div>
			</div>
		</div>
	`,
	inputs: ['task']
})
export class TaskDisplayComponent {

	task: Task;
}