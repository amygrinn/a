import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Project, PROJECTS } from './project-info';

@Component({
  template: `
    <div *ngIf="projectSelected()">
      <ul>
        <li *ngFor="let project of projects">
          <my-project-mini [project]="project"></my-project-mini>
        </li>
      </ul>
    </div>
    <router-outlet></router-outlet>
    <div *ngIf="!projectSelected()">
      <button (click)="gotoAllProjects()">Back to all projects</button>
    </div>
  `
})
export class ProjectsComponent{
  constructor(private router: Router) { }

  projects = PROJECTS;

  projectSelected(): boolean {
    return this.router.url == '/projects';
  }

  gotoAllProjects(): void {
    this.router.navigate(['/projects']);
  }
}