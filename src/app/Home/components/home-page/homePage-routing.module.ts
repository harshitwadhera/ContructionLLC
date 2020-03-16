import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { CustFeedbackComponent } from '../cust-feedback/cust-feedback.component';


// const routes: Routes = [
  
//  // {path: '', component: HomePageComponent
//   // , children: [
//   //   {
//   //     path: 'dialog',
//   //     loadChildren:
//   //         "./Home/components/cust-feedback/cust-feedback.module#CustFeebackModule"
//   //   }
//   // ]
//   //},
//   { path: '',  component: HomePageComponent,
// //   children: [
// //     {
// //       path: 'dialog',
// //       loadChildren:
// //           "../cust-feedback/cust-feedback.module#CustFeebackModule"
// //     }]  
//   },
//   //{ path: 'dailog', component:CustFeedbackComponent //loadChildren: '../cust-feedback/cust-feedback.module#CustFeebackModule'},
  
// ];

// @NgModule({
//   imports: [ RouterModule.forRoot([
//     {
//       path: 'home',
//       component: HomePageComponent,
//       children: [
//         {
//           path: 'dialog',
//           component: CustFeedbackComponent
//         }
//       ]
//     },
//     { path: '**', redirectTo: 'home' }
//   ])],
//   exports: [RouterModule]
// })
export class HomeRoutingModule { }
