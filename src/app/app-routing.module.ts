import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Home/components/home-page/home-page.component';
import { CustFeedbackComponent } from './Home/components/cust-feedback/cust-feedback.component';

const routes: Routes = [
  
  //{path: '**', redirectTo:'home',pathMatch:'full' },
  // , children: [
  //   {
  //     path: 'dialog',
  //     loadChildren:
  //         "./Home/components/cust-feedback/cust-feedback.module#CustFeebackModule"
  //   }
  // ]
 // },
  { path: 'home', component: HomePageComponent,
  children: [
    {
      path: 'dialog',
      component: CustFeedbackComponent
    }]   // loadChildren: './Home/components/home-page/homePage.module#HomePageModule'
 // { path: 'home',  loadChildren: './Home/components/home-page/homePage.module#HomePageModule'
 

},//C:\Users\h\harshitWork\dev\ContructionLLC\src\app\Home\components\projects
//{ path:'projects',loadChildren: () => import('./Home/components/projects/projects.module').then(c => c.ProjectsModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
