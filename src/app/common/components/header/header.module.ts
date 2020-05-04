import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/common/components/header/header.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  
  { path:'projects',loadChildren: () => import('../../../Home/components/projects/projects.module').then(c => c.ProjectsModule)},
   ];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
     RouterModule.forChild(routes),
 
  ],
  exports: [
    HeaderComponent,
    RouterModule
  ]
})
export class HeaderModule { }
