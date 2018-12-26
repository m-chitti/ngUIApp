import { TransactionHistory } from '../transHistory/transaction-history';
import { Action } from '@ngrx/store';

export const ADD_TRANS_HIST = 'ADD_TRANS_HIST';

export function addTransHistReducer(state: TransactionHistory[] = [], action) {
  switch (action.type) {
    case ADD_TRANS_HIST:
        return [...state, action.payload];
    default:
        return state;
    }
}
