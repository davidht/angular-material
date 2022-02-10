import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAddressComponent } from './my-address/my-address.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'address', component: MyAddressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
