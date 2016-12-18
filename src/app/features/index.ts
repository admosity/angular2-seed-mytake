import { AccountComponent } from './account/account.component';
import { AccountSummaryComponent } from './account/account-summary/account-summary.component';
import { AppCommons } from '../common';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoalComponent } from './goal/goal.component';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { featureRoutes } from './feature.routes';
import { reducer } from './feature.reducers';

export const COMPONENTS = [
    AccountComponent,
    AccountSummaryComponent,
    DashboardComponent,
    GoalComponent,
    RegisterComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(featureRoutes),
        MaterialModule.forRoot(),
        StoreModule.provideStore(reducer),
        AppCommons
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class FeaturesModule { }

export * from './feature.model';
export * from './feature.routes';
export * from './feature.reducers';
