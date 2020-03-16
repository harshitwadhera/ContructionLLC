import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustFeedbackComponent } from './cust-feedback.component';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [ CustFeedbackComponent ],
  imports: [
    CommonModule,
    SlickCarouselModule 
  ],
  exports: [
    CustFeedbackComponent,
    
  ]
})
export class CustFeebackModule {
}
