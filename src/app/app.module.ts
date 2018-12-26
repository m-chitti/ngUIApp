import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { transHistoryComponent } from './transHistory/transHistory.component';
import { addTransHistReducer } from './reducers/transHistory.reducer';
import { DisplayComponent } from './display/display.component';
import { HttpModule } from '@angular/http';
import { BalanceComponent } from './balance/balance.component';
import {Routes, RouterModule} from '@angular/router';

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
    StoreModule.forRoot({transHistory: addTransHistReducer}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
