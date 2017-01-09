import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ResumeComponent } from './resume.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectMiniComponent } from './projects/project-mini.component';
import { JetVRComponent } from './projects/jet-vr.component';
import { NeverEatAloneComponent } from './projects/never-eat-alone.component';
import { TrappedNoteComponent } from './projects/trapped-note.component';
import { TriangulumComponent } from './projects/triangulum.component';
import { VRConstellationsComponent }  from './projects/vr-constellations.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ResumeComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectMiniComponent,
    JetVRComponent,
    NeverEatAloneComponent,
    TrappedNoteComponent,
    TriangulumComponent,
    VRConstellationsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
