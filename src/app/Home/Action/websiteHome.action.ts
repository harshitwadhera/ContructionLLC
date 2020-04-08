import { Action } from '@ngrx/store';

export enum websiteAction {
    
    GET_ALL_PROJECTS='[CCollection] Get DROPDOWN Map',
    GET_ALL_PROJECTS_COMPLETE_ACTION='[CCollection] Get DROPDOWN Map Complete Action'
}

export class Get_All_Projects implements Action{
    public readonly type= websiteAction.GET_ALL_PROJECTS;
    constructor(public payload:boolean){

    }
}

export class Get_All_Projects_Complete_Action implements Action{
    public readonly type= websiteAction.GET_ALL_PROJECTS_COMPLETE_ACTION;
    constructor(public payload:any){
        
    }
}
export type AllAction = Get_All_Projects | Get_All_Projects_Complete_Action