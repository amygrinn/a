import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { JetVRComponent, JET_VR } from './jet-vr.component';
import { NeverEatAloneComponent, NEVER_EAT_ALONE } from './never-eat-alone.component';
import { TrappedNoteComponent, TRAPPED_NOTE } from './trapped-note.component';
import { TriangulumComponent, TRIANGULUM } from './triangulum.component';
import { VRConstellationsComponent, VR_CONSTELLATIONS } from './vr-constellations.component';

export const PROJECT_ROUTES: Routes = [
  { path: JET_VR.routerLink, component: JetVRComponent },
  { path: NEVER_EAT_ALONE.routerLink, component: NeverEatAloneComponent },
  { path: TRAPPED_NOTE.routerLink, component: TrappedNoteComponent },
  { path: TRIANGULUM.routerLink, component: TriangulumComponent },
  { path: VR_CONSTELLATIONS.routerLink, component: VRConstellationsComponent }
]


export const PROJECTS: Project[] = [
  JET_VR,
  NEVER_EAT_ALONE,
  TRAPPED_NOTE,
  TRIANGULUM,
  VR_CONSTELLATIONS
]

export class Project{
  name: string;
  routerLink: string
  description: string;
}
