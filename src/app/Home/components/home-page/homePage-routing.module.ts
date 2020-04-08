import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { CustFeedbackComponent } from '../cust-feedback/cust-feedback.component';


const routes: Routes = [
  
{path: '', component: HomePageComponent},
{ path:'projects',loadChildren: () => import('../projects/projects.module').then(c => c.ProjectsModule)},
 ];

 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
export class HomeRoutingModule { }
