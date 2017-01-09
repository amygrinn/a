import { Component } from '@angular/core';

import { Project } from './project-info';

export const NEVER_EAT_ALONE: Project = {
  name: 'Never Eat Alone',
  routerLink: 'never-eat-alone',
  description: 'An android app designed to let University of Michigan students find friends to eat with at the dining halls'
} 

@Component({
  template: '<h1>NEVER EAT ALONE</h1>'
})
export class NeverEatAloneComponent{}