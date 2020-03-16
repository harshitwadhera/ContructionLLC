import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './Home/components/home-page/homePage.module';
import { HeaderModule } from './common/components/header/header.module';
import { FooterModule } from './common/components/footer/footer.module';
import { CustFeedbackComponent } from './Home/components/cust-feedback/cust-feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
