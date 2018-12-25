import { TransactionHistory } from '../transHistory/transaction-history';
import { Action, MetaReducer, ActionReducer } from '@ngrx/store';
import { localStorageSync, rehydrateApplicationState } from 'ngrx-store-localstorage';
import {AppState} from '../app.state'
import { environment } from '../../environments/environment';
import { logging } from 'protractor';

export const ADD_TRANS_HIST = 'ADD_TRANS_HIST';

export class Storage implements Action {
    readonly type = '@ngrx/store/storage';
    constructor(readonly payload: string) { }
  }

export function addTransHistReducer(state: TransactionHistory[]=[], action) {
  switch (action.type) {
    case ADD_TRANS_HIST:
        return [...state, action.payload];
    default:
        return state;
    }
}

   
  export function localStorageSyncReducer(addTransHistReducer: ActionReducer<AppState>): ActionReducer<AppState> {
     
    return (state: AppState, action: any) => {
        console.log("==============  "+action.type)
      const keys = ['session'];
      debugger;
    //   if ((action.type === ADD_TRANS_HIST )) {
    //     return [state, action.payload];
    //   }
      if ((action.type === '@ngrx/store/init')) {
        const rehydratedState = rehydrateApplicationState([action.payload], localStorage, k => k, false);
        return { ...state, ...rehydratedState };
      }
      return localStorageSync({ keys, rehydrate: true, })(addTransHistReducer)(state, action);
    }
  }
  
  export const metaReducers: MetaReducer<AppState>[] = ! environment.production
    ? [localStorageSyncReducer]
    : [localStorageSyncReducer];



