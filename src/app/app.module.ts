import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { transHistoryComponent } from './transHistory/transHistory.component';
import { addTransHistReducer } from './reducers/transHistory.reducer';
import { DisplayComponent } from './display/display.component';
import { HttpModule } from '@angular/http';
import { BalanceComponent } from './balance/balance.component';
import {Routes, RouterModule} from '@angular/router';

import {metaReducers} from './reducers/transHistory.reducer'

const appRoutes: Routes = [
  { path: '', component: transHistoryComponent},
  { path: 'balance', component: BalanceComponent}

 ];

 


@NgModule({
  declarations: [
    AppComponent,
    transHistoryComponent,
    DisplayComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    RouterModule.forRoot(
      appRoutes),
    StoreModule.forRoot({transHistory: addTransHistReducer},{metaReducers}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
