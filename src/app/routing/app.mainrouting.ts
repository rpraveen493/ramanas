import { Stockmanagement } from '../StockManagement/app.stockmanagementcomponent';
import { HomeComponent } from '../Home/app.Homecomponent';
import { billingComponent } from '../billing/app.billingcomponent';
import { stockcomponent } from '../stock-options/app.stockcomponent';
import {  duecomponent } from '../stock-options/app.duecomponent';
import { expcomponent } from '../stock-options/app.expcomponent';
import { wagescomponent } from '../stock-options/app.wagescomponent';
import { dailycomponent } from '../stock-options/app.dailycomponent';
import { tablecomponent } from '../stock-options/app.tablecomponent';



export const mainroutes=[
    { path: 'Home', component:HomeComponent },
    { path: 'Stock management', 
      component:Stockmanagement, 
      children:[
          { path: 'stock',component:stockcomponent},
          {path:'Daily stock',component:dailycomponent,children:[
            {path:'view',component:tablecomponent}

          ]},
          { path:'due',component: duecomponent},
          {path:'expenditure',component:expcomponent},
          {path:'wages',component:wagescomponent}
         
      ]
    },
    { path: 'Billing', component:billingComponent},
    { path: '', component:HomeComponent}
]




