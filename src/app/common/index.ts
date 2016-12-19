import { ColDirective } from './col/col.directive';
import { CommonModule } from '@angular/common';
import { ContainerDirective } from './container/container.directive';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '@angular/material';
import { NavitemComponent } from './navitem/navitem.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

export const COMMON_COMPONENTS = [
    ColDirective,
    ContainerDirective,
    LayoutComponent,
    NavitemComponent,
    SidenavComponent,
    ToolbarComponent
];

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot(),
        RouterModule.forChild([]),
    ],
    declarations: COMMON_COMPONENTS,
    exports: COMMON_COMPONENTS
})
export class AppCommons { }

export * from './common.model';
export * from './common.reducer';
