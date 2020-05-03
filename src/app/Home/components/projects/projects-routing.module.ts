import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustFeedbackComponent } from '../cust-feedback/cust-feedback.component';
import { ProjectsComponent } from './projects.component';


const routes: Routes = [
  
{path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class projectsRouting { }