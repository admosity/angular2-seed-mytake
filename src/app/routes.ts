import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './features/landing/landing.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: LandingComponent }
];

