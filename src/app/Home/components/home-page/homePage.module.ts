import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderModule } from 'src/app/common/components/header/header.module';
import { FooterModule } from 'src/app/common/components/footer/footer.module';
import { CustFeebackModule } from '../cust-feedback/cust-feedback.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    HeaderModule,
    FooterModule,
    CustFeebackModule,
    SlickCarouselModule
 
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
