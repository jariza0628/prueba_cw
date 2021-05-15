import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DashboardComponent as Dashboar} from '../pages/dashboard/dashboard.component';
import {UserProfileComponent} from '../pages/user-profile/user-profile.component';
import {TablesComponent} from '../pages/tables/tables.component';
import {IconsComponent} from '../pages/icons/icons.component';
import {MapsComponent} from '../pages/maps/maps.component';

const routes: Routes = [
  {path: '', component: DashboardComponent,
    children: [
      { path: '',  redirectTo: 'user-profile' },
      { path: 'dashboard',      component: DashboardComponent },
      { path: 'user-profile',   component: UserProfileComponent },
      { path: 'tables',         component: TablesComponent },
      { path: 'icons',          component: IconsComponent },
      { path: 'maps',           component: MapsComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }