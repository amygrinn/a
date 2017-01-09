import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ResumeComponent } from './resume.component';
import { ContactComponent } from './contact.component';

import { ProjectsComponent } from './projects/projects.component';
import { PROJECT_ROUTES } from './projects/project-info';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent,
    children: PROJECT_ROUTES },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }