import { TransactionHistory } from './transHistory/transaction-history';

export interface AppState {
  readonly transHistory: TransactionHistory[];
}
