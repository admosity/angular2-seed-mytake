import {
    RouterLinkStubDirective,
    RouterOutletStubComponent,
} from './router.stubs';

import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreLogStubComponent } from './redux.stubs';

const TEST_COMPONENTS = [
    StoreLogStubComponent,
    RouterLinkStubDirective,
    RouterOutletStubComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: TEST_COMPONENTS,
    exports: TEST_COMPONENTS
})
export class TestModule {}