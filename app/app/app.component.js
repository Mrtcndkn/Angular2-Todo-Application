System.register(['angular2/core', 'angular2/router', '../app/dashboard/dashboard', '../app/manage/manage'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, dashboard_1, manage_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (manage_1_1) {
                manage_1 = manage_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: "/", as: 'Dashboard', component: dashboard_1.Dashboard },
                        { path: "/Manage", as: 'Manage', component: manage_1.Manage }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1 class=\"todo\">What To Do?</h1>\n        <ul class=\"nav nav-tabs\">\n          <li role=\"presentation\" class=\"active\"><a href=\"#\" [routerLink]=\"['/Dashboard']\">Dashboard</a></li>\n          <li role=\"presentation\"><a href=\"#\" [routerLink]=\"['/Manage']\">Add/Delete</a></li>\n        </ul>\n\n        <div>\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [router_1.RouterOutlet, router_1.RouterLink],
                        styles: ["\n        .todo \n        {\n            color: rgb(28, 11, 11);\n            font-size: 65px;\n            background-color: rgb(255, 255, 255);\n            text-shadow: rgb(5, 2, 2) 1px 1px 7px;\n            text-align:center;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map