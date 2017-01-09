import { Component } from '@angular/core';

import { Project } from './project-info';

export const TRIANGULUM: Project = {
  name: 'Triangulum',
  routerLink: 'triangulum',
  description: 'Google Cardboard game made with my "Trapped Note" team and funded by a successful kickstarter campaign'
}

@Component({
  template: '<h1>TRIANGULUM</h1>'
})
export class TriangulumComponent{}