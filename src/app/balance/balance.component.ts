import { TransactionHistory } from '../transHistory/transaction-history';
import { Component, OnInit } from '@angular/core';
import { AppState } from './../app.state';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html'
})
export class BalanceComponent implements OnInit {

  name: String;
  price: Number;
  show = false;
  trans: Observable<TransactionHistory[]>;
  constructor(private store: Store<AppState>) {
    this.trans = this.store.select(state => state.transHistory);
   }

  ngOnInit() {
  }
  showBalance() {
    this.show = true;
  }
 

}
