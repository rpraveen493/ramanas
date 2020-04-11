import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Home/app.Homecomponent';
import {RouterModule,Routes} from "@angular/router"
import {mainroutes}from './routing/app.mainrouting'
import { Stockmanagement} from './StockManagement/app.stockmanagementcomponent';
import { mastercomponent } from './Home/app.mastercomponenet';
import { billingComponent} from './billing/app.billingcomponent';
import { stockcomponent} from './stock-options/app.stockcomponent';
import { duecomponent} from './stock-options/app.duecomponent';
import { expcomponent} from './stock-options/app.expcomponent';
import { wagescomponent } from './stock-options/app.wagescomponent';
import { dailycomponent } from './stock-options/app.dailycomponent';
import { tablecomponent } from './stock-options/app.tablecomponent';


@NgModule({
  declarations: [
    HomeComponent,Stockmanagement,mastercomponent,billingComponent,stockcomponent,duecomponent,expcomponent,
    wagescomponent,dailycomponent,tablecomponent
  ],
  imports: [
    RouterModule.forRoot(mainroutes),
  
    BrowserModule,
    AppRoutingModule,
    NgModule
  ],
  providers: [],
  bootstrap: [mastercomponent]
})
export class AppModule { }
