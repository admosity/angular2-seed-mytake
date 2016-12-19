import { AccountComponent } from './account/account.component';
import { AccountSummaryComponent } from './account/account-summary/account-summary.component';
import { AppCommons } from '../common';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { featureRoutes } from './feature.routes';
import { reducer } from './feature.reducers';

export const COMPONENTS = [
    AccountComponent,
    AccountSummaryComponent,
    LandingComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(featureRoutes),
        MaterialModule.forRoot(),
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        AppCommons
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class FeaturesModule { }

export * from './feature.model';
export * from './feature.routes';
export * from './feature.reducers';
