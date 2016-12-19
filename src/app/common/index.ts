import { ColDirective } from './col/col.directive';
import { CommonModule } from '@angular/common';
import { ContainerDirective } from './container/container.directive';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';

export const COMMON_COMPONENTS = [
    ColDirective,
    ContainerDirective,
    LayoutComponent,
    SidenavComponent
];

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot()
    ],
    declarations: COMMON_COMPONENTS,
    exports: COMMON_COMPONENTS
})
export class AppCommons { }

export * from './common.model';
export * from './common.reducer';
