import {Injectable} from 'angular2/core';
import {Task} from './task';
import {Dashboard} from '../app/dashboard/dashboard';
import {Manage} from '../app/manage/manage';

@Injectable()

export class TaskService {
	getTasks(){
		var tasksString = localStorage.getItem('tasks');
		if (tasksString) {
			return Promise.resolve(JSON.parse(tasksString));
		}
		else {
			return Promise.resolve([]);
		}
	}

	addTask(newTask: Task) {
		var tasksString = localStorage.getItem('tasks'),
			tasks: Task[] = tasksString ? JSON.parse(tasksString) : [];

		tasks.push(newTask);

		localStorage.setItem('tasks', JSON.stringify(tasks));

	}
}