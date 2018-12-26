import { TransactionHistory } from '../transHistory/transaction-history';
import { Component, OnInit } from '@angular/core';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html'
})
export class DisplayComponent implements OnInit {

  trans: Observable<TransactionHistory[]>;
  constructor(private store: Store<AppState>) {
    this.trans = this.store.select(state => state.transHistory);
   }

  ngOnInit() {
  }

}
