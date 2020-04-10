import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './Home/components/home-page/homePage.module';
import { HeaderModule } from './common/components/header/header.module';
import { FooterModule } from './common/components/footer/footer.module';
import { CustFeedbackComponent } from './Home/components/cust-feedback/cust-feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './Home/components/projects/projects.component';
import { ProjectsModule } from './Home/components/projects/projects.module';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { homeService } from './Home/Service/home.service';
import { EffectsModule } from '@ngrx/effects';
import { homeEffects } from './Home/effects/home.effects';

export function clearState(reducer){
  return function (state,action){
    //if(action.type == LOGOUT_S)
    return reducer(state,action);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    StoreModule.forRoot(reducers,{metaReducers:[clearState]}),
    EffectsModule.forRoot([
      homeEffects
    ]),
  ],
  providers: [homeService],
  bootstrap: [AppComponent],

})
export class AppModule { }
