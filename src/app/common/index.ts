import { ColDirective } from './Col/col.directive';
import { CommonModule } from '@angular/common';
import { ContainerDirective } from './container/container.directive';
import { NgModule } from '@angular/core';

export const COMMON_COMPONENTS = [
    ColDirective,
    ContainerDirective
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMMON_COMPONENTS,
    exports: COMMON_COMPONENTS
})
export class AppCommons { }
