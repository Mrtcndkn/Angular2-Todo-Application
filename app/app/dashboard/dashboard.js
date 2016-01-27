System.register(['angular2/core', '../../task/task.service', '../../task/taskdisplay.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_service_1, taskdisplay_component_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            },
            function (taskdisplay_component_1_1) {
                taskdisplay_component_1 = taskdisplay_component_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard(_taskService) {
                    this._taskService = _taskService;
                    this.tasks = [];
                    this.selectedTask = null;
                }
                Dashboard.prototype.ngOnInit = function () {
                    var _this = this;
                    this._taskService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
                };
                Dashboard.prototype.setSelectedTask = function (task) {
                    this.selectedTask = task;
                };
                Dashboard = __decorate([
                    core_1.Component({
                        selector: 'manage',
                        template: "\n\t\t<div class=\"container\">\n\t\t\t<table class=\"table table-striped\">\n\t    \t\t<tr>\n\t    \t\t\t<th>Task</th>\n\t    \t\t\t<th>Due date</th>\n\t    \t\t\t<th>Status</th>\n\t    \t\t</tr>\n\t    \t\t<tr *ngFor=\"#task of tasks\" (click)=\"setSelectedTask(task)\">\n\t    \t\t\t<td>{{task.name}}</td>\n\t    \t\t\t<td>{{task.dueDate}}</td>\n\t    \t\t\t<td [class.done]=\"task.done\">{{task.done ? 'IT\\'s DONE' : 'WORKING ON IT'}}</td>\n\t    \t\t\t<td><button style=\"margin:10px 0 0 50px;\"class=\"btn btn-primary\" (click)=\"task.done = !task.done\">{{task.done ? 'Undo' : 'Done'}}</button></td>\n\t    \t\t</tr>\n\t    \t</table>\n\t    \t<task-display [task]=\"selectedTask\"></task-display>\n\t    </div>\n\t",
                        providers: [task_service_1.TaskService],
                        directives: [taskdisplay_component_1.TaskDisplayComponent],
                        styles: [
                            "\n    \t\t.done {\n    \t\t\tcolor: green;\n    \t\t}\n    \t"
                        ]
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService])
                ], Dashboard);
                return Dashboard;
            })();
            exports_1("Dashboard", Dashboard);
        }
    }
});
//# sourceMappingURL=dashboard.js.map