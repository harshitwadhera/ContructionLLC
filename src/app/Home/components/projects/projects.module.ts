import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { projectsRouting } from './projects-routing.module';
import { FooterModule } from 'src/app/common/components/footer/footer.module';
import { HeaderModule } from 'src/app/common/components/header/header.module';
import { EffectsModule } from '@ngrx/effects';
import { homeEffects } from '../../effects/home.effects';
import { reducer } from '../../reducers/home.reducer';
import { StoreModule } from '@ngrx/store';
import { homeService } from '../../Service/home.service';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    projectsRouting,
    HeaderModule,
    FooterModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([
      homeEffects
    ])
  ],
  exports:[
    ProjectsComponent
  ],
  providers:[
    homeService
  ]
})
export class ProjectsModule { }
