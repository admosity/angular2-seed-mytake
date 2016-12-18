import { AccountComponent } from '../app/features/account/account.component';
import { AccountSummaryComponent } from '../app/features/account/account-summary/account-summary.component';
import {ColDirective} from '../app/common/Col/col.directive';
import { CommonModule } from '@angular/common';
import { ContainerDirective } from '../app/common/container/container.directive';
import { DashboardComponent } from '../app/features/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { GoalComponent } from '../app/features/goal/goal.component';
import { NgModule } from '@angular/core';

export const declarations = [
    AccountComponent,
    DashboardComponent,
    GoalComponent,
    AccountSummaryComponent,
    ContainerDirective,
    ColDirective
];