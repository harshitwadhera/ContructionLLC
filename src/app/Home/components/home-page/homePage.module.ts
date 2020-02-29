import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeaderComponent } from 'src/app/common/components/header/header.component';
import { FooterComponent } from 'src/app/common/components/footer/footer.component';

@NgModule({
  declarations: [HomePageComponent,HeaderComponent,FooterComponent],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
