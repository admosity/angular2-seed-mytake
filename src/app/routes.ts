import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './features/account/account.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'account', component: AccountComponent }
];

