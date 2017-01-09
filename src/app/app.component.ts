import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <my-dashboard></my-dashboard>
    <router-outlet></router-outlet>
  `
})
export class AppComponent{
  title = 'Tyler Grinn';
}
