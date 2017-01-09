import { Component } from '@angular/core';

import { Project } from './project-info';

export const VR_CONSTELLATIONS: Project = {
  name: 'VR Constellations for Google Cardboard',
  routerLink: 'vr-constellations',
  description: 'A project inspired by naked eye astronomy. Helps to train people to find constellations in the night sky based on where they live and what time it is. Made with Unity.'
}

@Component({
  template: '<h1>VR CONSTELLATIONS</h1>'
})
export class VRConstellationsComponent{

}