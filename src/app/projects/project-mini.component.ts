import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

import { Project } from './project-info';

@Component({
  selector: 'my-project-mini',
  template: `
    <p>mini project</p>
    <h3>{{project.name}}</h3>
    <h4>{{project.description}}</h4>
    <button (click)="gotoDetail()">Details</button>
  `
})
export class ProjectMiniComponent{
  @Input()
  project: Project;

  constructor(private router: Router) { }

  gotoDetail(): void {
    this.router.navigate(['projects/'+this.project.routerLink])
  }
}