import { Component } from '@angular/core';

import { Project } from './project-info';

export const JET_VR: Project = {
  name: 'Jet VR',
  routerLink: 'jet-vr',
  description: 'A project made with Unity with my TrappedNote team'
}

@Component({
  templateUrl: './jet-vr.component.html'
})
export class JetVRComponent{}
