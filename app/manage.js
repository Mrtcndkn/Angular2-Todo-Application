System.register(['angular2/core', './task.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_service_1;
    var Manage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            }],
        execute: function() {
            Manage = (function () {
                function Manage(_taskService) {
                    this._taskService = _taskService;
                    this.newTask = {
                        done: false
                    };
                }
                Manage.prototype.addTask = function (newTask) {
                    this._taskService.addTask(newTask);
                    this.message = "To Do Item Added Successfully!";
                };
                Manage = __decorate([
                    core_1.Component({
                        selector: 'manage',
                        template: "\n\t\t<div class=\"container\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"Todo\">To-Do</label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"newTask.name\" class=\"form-control\" placeholder=\"What To Do?\"/>\n\t\t\t</div>\n\t    \t<div class=\"form-group\">\n\t    \t\t<label for=\"Due\">Due-date</label>\n\t    \t\t<input type=\"date\" [(ngModel)]=\"newTask.dueDate\" class=\"form-control\" style=\"width:15%;\"/>\n\t    \t</div>\n\t    \t<button class=\"btn btn-success\" (click)=\"addTask(newTask)\">Add Task</button>\n\t    \t<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"message\" style=\"margin-top:20px;\">\n\t    \t\t{{message}}\n\t    \t</div>\n\t    </div>\n\t",
                        providers: [task_service_1.TaskService]
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService])
                ], Manage);
                return Manage;
            })();
            exports_1("Manage", Manage);
        }
    }
});
//# sourceMappingURL=manage.js.map