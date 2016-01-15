import {Component} from 'angular2/core';
import {RouterOutlet, RouteConfig, RouterLink} from 'angular2/router';
import {Dashboard} from './dashboard';
import {Manage} from './manage';

@RouteConfig([
    { path: "/", as: 'Dashboard', component: Dashboard },
    { path: "/Manage", as: 'Manage', component: Manage }
])

@Component({
    selector: 'my-app',
    template: `<h1 class="todo">What To Do?</h1>
        <ul class="nav nav-tabs">
          <li role="presentation" class="active"><a href="#" [routerLink]="['/Dashboard']">Dashboard</a></li>
          <li role="presentation"><a href="#" [routerLink]="['/Manage']">Add/Delete</a></li>
        </ul>

        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [RouterOutlet,RouterLink],
    styles: [`
        .todo 
        {
            color: rgb(28, 11, 11);
            font-size: 65px;
            background-color: rgb(255, 255, 255);
            text-shadow: rgb(5, 2, 2) 1px 1px 7px;
            text-align:center;
        }
    `]
})
export class AppComponent {
}