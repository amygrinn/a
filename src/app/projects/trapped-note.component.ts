import { Component } from '@angular/core';

import { Project } from './project-info';

export const TRAPPED_NOTE: Project = {
  name: 'Trapped Note',
  routerLink: 'trapped-note',
  description: 'A small Google Cardboard game made during MHacks. It was the winner of the "Game Design" category.'
}

@Component({
  template: '<h1>TRAPPED NOTE</h1>'
})
export class TrappedNoteComponent {

}