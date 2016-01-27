System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TaskDisplayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TaskDisplayComponent = (function () {
                function TaskDisplayComponent() {
                }
                TaskDisplayComponent = __decorate([
                    core_1.Component({
                        selector: 'task-display',
                        template: "\n\t\t<div class=\"panel panel-default\" *ngIf=\"task\" style=\"margin-top:20px\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"form-horizontal\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t    \t\t\t<label class=\"col-sm-1 control-label\">Title:</label>\n\t\t    \t\t\t<div class=\"col-sm-11\">\n\t\t    \t\t\t\t<p class=\"form-control-static\">{{task.name}}</p>\n\t\t    \t\t\t</div>\n\t\t  \t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t    \t\t\t<label class=\"col-sm-1 control-label\">Director:</label>\n\t\t    \t\t\t<div class=\"col-sm-11\">\n\t\t\t   \t\t\t\t<p class=\"form-control-static\">{{task.dueDate}}</p>\n\t\t    \t\t\t</div>\n\t\t  \t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t    \t\t\t<label class=\"col-sm-1 control-label\">Year:</label>\n\t\t    \t\t\t<div class=\"col-sm-11\">\n\t\t\t   \t\t\t\t<p class=\"form-control-static\">{{task.done}}</p>\n\t\t    \t\t\t</div>\n\t\t  \t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
                        inputs: ['task']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskDisplayComponent);
                return TaskDisplayComponent;
            })();
            exports_1("TaskDisplayComponent", TaskDisplayComponent);
        }
    }
});
//# sourceMappingURL=taskdisplay.component.js.map