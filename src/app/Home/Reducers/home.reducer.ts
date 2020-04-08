import { AllAction, websiteAction } from '../Action/websiteHome.action';


export class HomeStateChange{
    projectsData:any;


public constructor(data:any){
    this.projectsData = data.projectsData;
}

}

export const initialState = () =>{
    return new HomeStateChange ({
        projectsData:[]
    })
}

export function reducer(state = initialState(),action:AllAction):HomeStateChange{

    switch(action.type){
        case websiteAction.GET_ALL_PROJECTS:{
            return state;
        }

        case websiteAction.GET_ALL_PROJECTS_COMPLETE_ACTION:{
            return Object.assign({},state ,{
                projectsData:action.payload
            });
        }
    }

}

