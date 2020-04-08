import * as homeReducer from './Home/Reducers/home.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    WebsiteHomeState:homeReducer.HomeStateChange;
}

export const reducers:ActionReducerMap<AppState> = {
    WebsiteHomeState:homeReducer.reducer,
}