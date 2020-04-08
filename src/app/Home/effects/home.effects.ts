import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { websiteAction } from '../Action/websiteHome.action';
import * as websiteActionClass  from '../Action/websiteHome.action';
import { mergeMap,map,catchError } from 'rxjs/operators';
import { Effect,Actions,ofType } from '@ngrx/effects';
import { homeService } from '../Service/home.service';
import { projectsRouting } from '../components/projects/projects-routing.module';
import { Observable, of } from 'rxjs';

@Injectable()
export class homeEffects {

    constructor(private action$:Actions,private homeService:homeService){}

    @Effect()
    getAllProjectsData$ : Observable<Action> = this.action$.pipe(ofType(websiteAction.GET_ALL_PROJECTS),
    mergeMap((action:websiteActionClass.Get_All_Projects) =>
    this.homeService.getProjectDataAll().pipe(map((projectsData:any)=> new websiteActionClass.Get_All_Projects_Complete_Action(projectsData)),
    catchError(() => of(new websiteActionClass.Get_All_Projects_Complete_Action('Not Found')))
    ))
    )
}