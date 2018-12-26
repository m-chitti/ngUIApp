import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TransactionHistory } from './transaction-history';
import { AppState } from '../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Http,Response} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transHistory',
  templateUrl: './transHistory.component.html'
})
export class transHistoryComponent implements OnInit {
  angForm: FormGroup;

  private url ='http://localhost:8080/fsapi';
  data:TransactionHistory;

  constructor(private store: Store<AppState>,private http: Http,private router: Router) {
    
  }


  makeRequest(): void {
    //debugger;
    this.http.get(this.url)
    .subscribe((res: Response) => {
      this.data = res.json();
      console.log('data************  '+this.data.transId);
      this.store.dispatch({
        type: 'ADD_TRANS_HIST',
        payload: <TransactionHistory> {
          transId: this.data.transId,
          amount: this.data.amount
        }
      });
    });

  }


  btnClick= function () {
    this.router.navigateByUrl('/balance');
  };

 
  ngOnInit() {
  }

}
